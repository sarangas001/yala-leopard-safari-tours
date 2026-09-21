import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing webhook signature" }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // No local order store exists — Stripe is the system of record, so there is
  // nothing to mutate here and no duplicate-fulfilment risk. This handler is
  // an observability/audit hook; re-deliveries simply log again and return 200.
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`[stripe webhook] checkout.session.completed session=${session.id} payment_status=${session.payment_status}`);
      break;
    }
    case "checkout.session.async_payment_succeeded": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`[stripe webhook] checkout.session.async_payment_succeeded session=${session.id}`);
      break;
    }
    case "checkout.session.async_payment_failed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.warn(`[stripe webhook] checkout.session.async_payment_failed session=${session.id}`);
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.warn(`[stripe webhook] payment_intent.payment_failed payment_intent=${paymentIntent.id}`);
      break;
    }
    case "charge.refunded": {
      const charge = event.data.object as Stripe.Charge;
      console.log(`[stripe webhook] charge.refunded charge=${charge.id}`);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
