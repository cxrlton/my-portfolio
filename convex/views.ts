import { query, mutation } from "./_generated/server";

const SITE_KEY = "site";

// Get total site view count
export const get = query({
  args: {},
  handler: async (ctx) => {
    const view = await ctx.db
      .query("views")
      .filter((q) => q.eq(q.field("page"), SITE_KEY))
      .first();
    return view?.count ?? 0;
  },
});

// Reset view count to 0
export const reset = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("views")
      .filter((q) => q.eq(q.field("page"), SITE_KEY))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, { count: 0 });
    }
  },
});

// Increment total site view count
export const increment = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("views")
      .filter((q) => q.eq(q.field("page"), SITE_KEY))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { count: existing.count + 1 });
      return existing.count + 1;
    } else {
      await ctx.db.insert("views", { page: SITE_KEY, count: 1 });
      return 1;
    }
  },
});
