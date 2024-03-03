// import {
//   NewCheckout,
//   createCheckout,
//   lemonSqueezySetup,
//   listVariants,
// } from "@lemonsqueezy/lemonsqueezy.js";
// import { v } from "convex/values";

// import { query } from "./_generated/server";
// import { httpAction } from "./_generated/server";

// lemonSqueezySetup({
//   apiKey: process.env.LEMON_SQUEEZY_API_KEY,
//   onError(error) {
//     console.log(error);
//   },
// });

// export const getProducts = httpAction(async () => {
//   const { statusCode, error, data } = await listVariants({
//     filter: { productId: 204026 },
//   });

//   console.log(data);

//   return new Response(null, {
//     status: 200,
//   });
// });

// export const createSubscriptionCheckout = httpAction(async () => {
//   const storeId = process.env.LEMON_SQUEEZY_STORE_ID!;
//   const variantId = 273295;
//   const newCheckout: NewCheckout = {
//     productOptions: {
//       name: "New Checkout Test",
//       description: "a new checkout test",
//     },
//     checkoutOptions: {
//       embed: true,
//       media: true,
//       logo: true,
//     },
//     checkoutData: {
//       email: "tita0x00@gmail.com",
//       name: "Lemon Squeezy Test",
//     },
//     expiresAt: null,
//     preview: true,
//     testMode: true,
//   };

//   const { statusCode, error, data } = await createCheckout(
//     storeId,
//     variantId,
//     newCheckout,
//   );

//   return new Response(null, {
//     status: 200,
//   });
// });

// export const getPlans = query({
//   handler: async (ctx) => {
//     return await ctx.db
//       .query("plan")
//       .filter((plan) => plan.neq(plan.field("status"), "draft"))
//       .collect();
//   },
// });

// export const getPlan = query({
//   args: { variantId: v.number() },
//   handler: async (ctx, { variantId }) => {
//     return await ctx.db
//       .query("plan")
//       .filter((plan) => plan.eq(plan.field("variantId"), variantId))
//       .filter((plan) => plan.neq(plan.field("status"), "draft"))
//       .first();
//   },
// });

// export const getSubscription = query({
//   args: { userId: v.string() },
//   handler: async (ctx, { userId }) => {
//     return await ctx.db
//       .query("subscription")
//       .filter((subscription) =>
//         subscription.eq(subscription.field("userId"), userId),
//       )
//       .order("desc")
//       .collect();
//   },
// });
