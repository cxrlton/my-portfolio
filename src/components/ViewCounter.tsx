"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useRef } from "react";

export function ViewCounter() {
  const views = useQuery(api.views.get, {});
  const increment = useMutation(api.views.increment);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (!hasIncremented.current) {
      hasIncremented.current = true;
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
