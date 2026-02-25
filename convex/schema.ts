import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Projects table
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    date: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    githubUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
  }),

  // Contact messages
  messages: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.number(),
    read: v.boolean(),
  }),

  // Page views
  views: defineTable({
    page: v.string(),
    count: v.number(),
  }),

  // "What I'm working on" widget
  currentFocus: defineTable({
    text: v.string(),
  }),
});
