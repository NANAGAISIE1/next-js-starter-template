import { ConvexError, v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const createUser = mutation({
  args: {
    kindeId: v.string(),
    given_name: v.optional(v.string()),
    family_name: v.optional(v.string()),
    email: v.string(),
    image: v.union(v.string(), v.null()),
  },

  handler: async (ctx, { kindeId, email, image, given_name, family_name }) => {
    if (!kindeId || !email) throw new ConvexError({ code: "UNAUTHORIZED" });

    // Check if the user is in the database
    const convexUser = await ctx.db
      .query("user")
      .withIndex("by_kindeId", (q) => q.eq("kindeId", kindeId))
      .unique();

    if (convexUser == undefined) {
      // create user in convex
      await ctx.db.insert("user", {
        kindeId: kindeId,
        given_name: given_name,
        family_name: family_name,
        email: email,
        image: image,
      });
    }
  },
});

export const getUser = query({
  args: { kindeId: v.string() },
  handler: async (ctx, { kindeId }) => {
    return await ctx.db
      .query("user")
      .withIndex("by_kindeId", (q) => q.eq("kindeId", kindeId))
      .unique();
  },
});
