"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function CurrentFocus() {
  const text = useQuery(api.focus.get, {});

  if (text === undefined || text === "") return null;

  return (
    <div className="flex items-center gap-2 mt-6">
      <span className="relative flex h-2 w-2">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ backgroundColor: '#a3a380' }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: '#a3a380' }}
        />
      </span>
      <p className="text-neutral-500 text-sm font-light">
        Currently:{" "}
        <span className="text-neutral-400">{text}</span>
      </p>
    </div>
  );
}
