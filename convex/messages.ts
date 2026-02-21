import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all messages (for admin view)
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").order("desc").collect();
  },
});

// Send a new message
export const send = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", {
      ...args,
      createdAt: Date.now(),
      read: false,
    });
  },
});

// Mark message as read
export const markRead = mutation({
  args: { id: v.id("messages") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { read: true });
  },
});
