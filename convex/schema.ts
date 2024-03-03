import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    kindeId: v.string(),
    given_name: v.optional(v.string()),
    family_name: v.optional(v.string()),
    email: v.string(),
    image: v.union(v.string(), v.null()),
    subscriptions: v.optional(v.array(v.id("subscription"))),
  }).index("by_kindeId", ["kindeId"]),
  workspace: defineTable({
    title: v.string(),
    user: v.id("user"),
    isArchived: v.boolean(),
    editorContent: v.optional(v.string()),
    canvasContent: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    coverImageBlurHash: v.optional(v.string()),
    icon: v.optional(v.string()),
    isPublished: v.boolean(),
  }).index("by_user", ["user"]),
  // subscription: defineTable({
  //   lemonSqueezyId: v.number(),
  //   orderId: v.number(),
  //   name: v.string(),
  //   email: v.string(),
  //   status: v.string(),
  //   renewsAt: v.optional(v.number()),
  //   endsAt: v.optional(v.number()),
  //   trialsEndsAt: v.optional(v.number()),
  //   resumesAt: v.optional(v.number()),
  //   price: v.number(),
  //   plan: v.id("plan"),
  //   planId: v.number(),
  //   user: v.id("user"),
  //   userId: v.string(),
  //   subscriptionItemId: v.optional(v.number()),
  // })
  //   .index("by_planId", ["planId"])
  //   .index("by_lemonSqueezyId", ["lemonSqueezyId"]),
  // plan: defineTable({
  //   productId: v.number(),
  //   variantId: v.number(),
  //   name: v.optional(v.string()),
  //   description: v.optional(v.string()),
  //   variantName: v.string(),
  //   sort: v.number(),
  //   status: v.string(),
  //   price: v.number(),
  //   interval: v.string(),
  //   intervalCount: v.number(),
  //   subscriptions: v.id("subscription"),
  // }),
  // lemonSqueezyWebhookEvent: defineTable({
  //   createdAt: v.number(),
  //   eventName: v.string(),
  //   processed: v.boolean(),
  //   body: v.string(),
  //   processingError: v.optional(v.string()),
  // }),
});
