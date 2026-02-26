"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useRef } from "react";

export function ViewCounter() {
  const views = useQuery(api.views.get, {});
  const increment = useMutation(api.views.increment);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (hasIncremented.current) return;
    hasIncremented.current = true;

    const key = 'pv_counted';
    const last = localStorage.getItem(key);
    const today = new Date().toDateString();

    if (last !== today) {
      localStorage.setItem(key, today);
      increment({});
    }
  }, [increment]);

  if (views === undefined) {
    return <span className="text-gray-500 text-sm">...</span>;
  }

  return (
    <span className="text-gray-500 text-sm">
      {views.toLocaleString()} views
    </span>
  );
}
