import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get view count for a page
export const get = query({
  args: { page: v.string() },
  handler: async (ctx, args) => {
    const view = await ctx.db
      .query("views")
      .filter((q) => q.eq(q.field("page"), args.page))
      .first();
    return view?.count ?? 0;
  },
});

// Increment view count
export const increment = mutation({
  args: { page: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("views")
      .filter((q) => q.eq(q.field("page"), args.page))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { count: existing.count + 1 });
      return existing.count + 1;
    } else {
      await ctx.db.insert("views", { page: args.page, count: 1 });
      return 1;
    }
  },
});
