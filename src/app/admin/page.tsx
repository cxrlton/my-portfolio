"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState, useEffect } from "react";

const PASSWORD = "change-me-123";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const currentText = useQuery(api.focus.get, {});
  const setFocus = useMutation(api.focus.set);

  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (currentText !== undefined) setDraft(currentText);
  }, [currentText]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      setAuthed(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await setFocus({ text: draft.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
          {passwordError && (
            <p className="text-sm font-light" style={{ color: '#a3a380' }}>Incorrect password.</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-3 border text-neutral-300 font-light transition-colors hover:bg-neutral-200 hover:text-neutral-900"
            style={{ borderColor: '#a3a380' }}
          >
            Enter
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ background: '#1c1c1a' }}>
      <form onSubmit={handleSave} className="w-full max-w-lg space-y-4">
        <h1 className="text-xl font-light text-neutral-300 tracking-tight mb-2">
          What are you working on?
        </h1>
        <p className="text-neutral-600 text-sm font-light mb-6">
          This shows live on the homepage. Leave blank to hide.
        </p>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={3}
          maxLength={120}
          placeholder="e.g. dialect-robust QA systems for low-resource languages"
          className="w-full px-4 py-3 bg-transparent border border-neutral-700 text-neutral-300 font-light placeholder-neutral-600 focus:outline-none focus:border-neutral-500 resize-none"
          autoFocus
        />
        <div className="flex items-center justify-between">
          <span className="text-neutral-700 text-xs font-light">{draft.length}/120</span>
          <button
            type="submit"
            className="px-6 py-2 border text-neutral-300 font-light transition-colors hover:bg-neutral-200 hover:text-neutral-900"
            style={{ borderColor: '#a3a380' }}
          >
            {saved ? "Saved ✓" : "Save"}
          </button>
        </div>
      </form>
    </main>
  );
}
