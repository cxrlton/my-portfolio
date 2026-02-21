import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all projects ordered by order field
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("asc").collect();
  },
});

// Get featured projects only
export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("featured"), true))
      .order("asc")
      .collect();
  },
});

// Add a new project
export const add = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    date: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    githubUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});

// Seed initial projects
export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("projects").first();
    if (existing) return "Projects already seeded";

    const projects = [
      {
        title: "GPT-2 Reimplementation",
        description:
          "Reimplemented GPT-2 (~124M params) in PyTorch, trained on FineWeb-Edu (10B tokens) using DDP across 4x NVIDIA L40S GPUs. Integrated Flash Attention (6x faster), torch.compile, and mixed precision training.",
        date: "Dec 2024",
        category: "PyTorch",
        tags: ["PyTorch", "DDP", "Flash Attention"],
        githubUrl: "https://github.com/cxrlton",
        featured: true,
        order: 1,
      },
      {
        title: "Memorizing Transformers",
        description:
          "Implemented Memorizing Transformers with kNN-based memory retrieval and external memory management, handling sequences up to 5120 tokens using PyTorch and FAISS.",
        date: "Jan 2024",
        category: "Research",
        tags: ["PyTorch", "FAISS", "Transformer-XL"],
        githubUrl: "https://github.com/cxrlton",
        featured: true,
        order: 2,
      },
      {
        title: "DeepResearch Framework",
        description:
          "Multi-LLM semantic orchestration framework exploring collaborative reasoning among SLMs. Deployed on HiPerGator via vLLM, achieving 15% improved accuracy and 70% cost reduction.",
        date: "2025",
        category: "Multi-LLM",
        tags: ["vLLM", "LLaMA", "GPT-4"],
        featured: true,
        order: 3,
      },
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    return "Seeded 3 projects";
  },
});
