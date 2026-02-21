"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export function ContactForm() {
  const sendMessage = useMutation(api.messages.send);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendMessage(formData);
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 border border-neutral-700 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors font-light"
          style={{ backgroundColor: '#222220' }}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 border border-neutral-700 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors font-light"
          style={{ backgroundColor: '#222220' }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="w-full px-4 py-3 border border-neutral-700 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors resize-none font-light"
          style={{ backgroundColor: '#222220' }}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3 text-neutral-200 font-normal transition-all hover:bg-neutral-200 hover:text-neutral-900 disabled:opacity-50"
        style={{ backgroundColor: 'transparent', border: '1px solid #a3a380' }}
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center font-light">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
