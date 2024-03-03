import { ConvexError, v } from "convex/values";

import { query } from "./_generated/server";

export const getAll = query({
  args: { kindeId: v.string() },
  handler: async (ctx, { kindeId }) => {
    const user = await ctx.db
      .query("user")
      .withIndex("by_kindeId", (q) => q.eq("kindeId", kindeId))
      .unique();

    if (user == undefined) {
      throw new ConvexError({ message: "User not found", code: "NOT_FOUND" });
    }

    const workspaces = await ctx.db
      .query("workspace")
      .withIndex("by_user", (q) => q.eq("user", user._id))
      .collect();

    return workspaces;
  },
});
