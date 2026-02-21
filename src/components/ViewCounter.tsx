"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useRef } from "react";

export function ViewCounter({ page }: { page: string }) {
  const views = useQuery(api.views.get, { page });
  const increment = useMutation(api.views.increment);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (!hasIncremented.current) {
      hasIncremented.current = true;
      increment({ page });
    }
  }, [increment, page]);

  if (views === undefined) {
    return <span className="text-gray-500 text-sm">...</span>;
  }

  return (
    <span className="text-gray-500 text-sm">
      {views.toLocaleString()} views
    </span>
  );
}
