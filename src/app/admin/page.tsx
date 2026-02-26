"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PASSWORD = "Kyledarnell9";

export default function AdminPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') router.push('/'); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  // Focus widget
  const currentText = useQuery(api.focus.get, {});
  const setFocus = useMutation(api.focus.set);
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (currentText !== undefined) setDraft(currentText);
  }, [currentText]);

  // Messages
  const messages = useQuery(api.messages.getAll);
  const markRead = useMutation(api.messages.markRead);
  const [expanded, setExpanded] = useState<string | null>(null);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (passwordInput === PASSWORD) { setAuthed(true); setPasswordError(false); }
    else setPasswordError(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await setFocus({ text: draft.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function toggleMessage(id: string, read: boolean) {
    if (expanded === id) { setExpanded(null); return; }
    setExpanded(id);
    if (!read) markRead({ id: id as never });
  }

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6" style={{ background: '#1c1c1a' }}>
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <h1 className="text-xl font-light text-neutral-300 tracking-tight mb-8">Admin</h1>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 bg-transparent border border-neutral-700 text-neutral-300 font-light placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
            autoFocus
          />
          {passwordError && <p className="text-sm font-light" style={{ color: '#a3a380' }}>Incorrect password.</p>}
          <button type="submit" className="w-full px-4 py-3 border text-neutral-300 font-light transition-colors hover:bg-neutral-200 hover:text-neutral-900" style={{ borderColor: '#a3a380' }}>
            Enter
          </button>
        </form>
      </main>
    );
  }

  const unread = messages?.filter(m => !m.read).length ?? 0;

  return (
    <main className="min-h-screen px-6 py-16" style={{ background: '#1c1c1a' }}>
      <div className="max-w-2xl mx-auto space-y-16">

        {/* Focus widget */}
        <section>
          <h2 className="text-xs tracking-widest uppercase text-neutral-500 font-light mb-6">Currently Working On</h2>
          <form onSubmit={handleSave} className="space-y-3">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={2}
              maxLength={120}
              placeholder="e.g. dialect-robust QA systems for low-resource languages"
              className="w-full px-4 py-3 bg-transparent border border-neutral-700 text-neutral-300 font-light placeholder-neutral-600 focus:outline-none focus:border-neutral-500 resize-none"
            />
            <div className="flex items-center justify-between">
              <span className="text-neutral-700 text-xs font-light">{draft.length}/120</span>
              <button type="submit" className="px-6 py-2 border text-neutral-300 font-light transition-colors hover:bg-neutral-200 hover:text-neutral-900" style={{ borderColor: '#a3a380' }}>
                {saved ? "Saved ✓" : "Save"}
              </button>
            </div>
          </form>
        </section>

        {/* Messages inbox */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs tracking-widest uppercase text-neutral-500 font-light">Inbox</h2>
            {unread > 0 && (
              <span className="px-2 py-0.5 text-xs font-light rounded-full" style={{ backgroundColor: '#a3a380', color: '#1c1c1a' }}>
                {unread} new
              </span>
            )}
          </div>

          {messages === undefined && (
            <p className="text-neutral-600 text-sm font-light">Loading...</p>
          )}

          {messages?.length === 0 && (
            <p className="text-neutral-600 text-sm font-light">No messages yet.</p>
          )}

          <div className="space-y-2">
            {messages?.map((m) => (
              <div
                key={m._id}
                className="border border-neutral-800 cursor-pointer transition-colors hover:border-neutral-600"
                style={{ backgroundColor: m.read ? '#1a1a18' : '#222220' }}
                onClick={() => toggleMessage(m._id, m.read)}
              >
                <div className="flex items-center justify-between px-5 py-4 gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    {!m.read && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#a3a380' }} />}
                    <span className={`text-sm truncate ${m.read ? 'text-neutral-500' : 'text-neutral-200'} font-light`}>
                      {m.name}
                    </span>
                    <span className="text-neutral-600 text-sm font-light truncate hidden sm:block">{m.email}</span>
                  </div>
                  <span className="text-neutral-600 text-xs font-light flex-shrink-0">
                    {new Date(m.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                {expanded === m._id && (
                  <div className="px-5 pb-5 border-t border-neutral-800 pt-4">
                    <p className="text-xs text-neutral-500 font-light mb-3">{m.email}</p>
                    <p className="text-neutral-300 text-sm font-light leading-relaxed whitespace-pre-wrap">{m.message}</p>
                    <a
                      href={`mailto:${m.email}?subject=Re: your message`}
                      className="inline-block mt-4 text-xs font-light hover:underline"
                      style={{ color: '#a3a380' }}
                      onClick={e => e.stopPropagation()}
                    >
                      Reply →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
