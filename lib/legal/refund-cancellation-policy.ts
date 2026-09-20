import type { LegalPage } from "@/lib/legal/types";

export const refundCancellationPolicy: LegalPage = {
  slug: "refund-cancellation-policy",
  title: "Refund, Cancellation & Return Policy",
  metaDescription: "Yala Wild Safari's policy on cancellations, refunds, deposits, no-shows and service changes.",
  website: "yalawildsafari.com",
  brand: "Yala Wild Safari",
  operator: "Yala Leopard Safari Tours",
  lastUpdated: "September 2026",
  draftNotice:
    "Draft for business/legal review before publication. Final refund timing, payment-gateway processing rules, no-show rules, third-party ticket treatment and force-majeure wording should be approved before launch.",
  sections: [
    {
      heading: "1. General Cancellation Policy",
      blocks: [
        { type: "paragraph", text: "The current business requirement is:" },
        { type: "paragraph", text: "Customers may cancel up to 24 hours before the scheduled safari/service start time and receive a full refund of the refundable booking amount." },
        { type: "paragraph", text: "Cancellation timing should be calculated using the confirmed local date/time of the booked safari or service." },
      ],
    },
    {
      heading: "2. Cancellations 24 Hours or More Before the Service",
      blocks: [
        { type: "paragraph", text: "Where a cancellation is received at least 24 hours before the scheduled start time:" },
        {
          type: "list",
          items: [
            "The customer should be eligible for a full refund of refundable amounts paid to Yala Wild Safari.",
            "Any non-refundable third-party charges, if applicable, must have been clearly disclosed before purchase.",
            "The customer may alternatively request a reschedule, subject to availability.",
          ],
        },
      ],
    },
    {
      heading: "3. Cancellations Less Than 24 Hours Before the Service",
      blocks: [
        { type: "paragraph", text: "The current requirement indicates that late cancellations may not qualify for a refund and that deposits may become non-refundable." },
        { type: "paragraph", text: "Proposed publishing rule, subject to final client approval:" },
        {
          type: "list",
          items: [
            "Cancellations made less than 24 hours before the scheduled start time are non-refundable unless Yala Wild Safari agrees otherwise due to exceptional circumstances.",
            "If the booking was made using the 30% deposit option, the deposit may be non-refundable when the customer cancels within this late-cancellation period.",
            "If full payment was made, refund eligibility for late cancellation should follow the final approved business rule.",
          ],
        },
        { type: "paragraph", text: "Final wording for full-payment cancellations inside 24 hours must be confirmed before publishing." },
      ],
    },
    {
      heading: "4. Deposit Bookings",
      blocks: [
        { type: "paragraph", text: "The website is planned to support a 30% deposit option." },
        { type: "paragraph", text: "At checkout and in the booking confirmation, customers must clearly see:" },
        {
          type: "list",
          items: [
            "Total booking value",
            "Deposit paid",
            "Remaining 70% balance",
            "When and how the remaining balance is due",
            "The applicable cancellation/refund conditions",
          ],
        },
        { type: "paragraph", text: "If a booking is cancelled at least 24 hours before the scheduled service, the current general requirement supports a full refund, subject to any clearly disclosed non-refundable third-party costs." },
        { type: "paragraph", text: "If cancellation occurs within 24 hours, the deposit may be non-refundable according to the final approved rule." },
      ],
    },
    {
      heading: "5. No-Shows and Late Arrival",
      blocks: [
        { type: "paragraph", text: "Final rule requires client confirmation before publication." },
        { type: "paragraph", text: "Recommended direction:" },
        { type: "paragraph", text: "A customer who does not arrive at the confirmed pickup point or otherwise misses the booked safari/service without timely notice may be treated as a no-show." },
        { type: "paragraph", text: "No-show refunds should not be promised unless approved by the business." },
        { type: "paragraph", text: "If a customer is late, Yala Wild Safari will make reasonable efforts where operationally possible, but park entry times, shared safari departures, cruise timing and other constraints may prevent delayed departure." },
      ],
    },
    {
      heading: "6. Changes Requested by the Customer",
      blocks: [
        { type: "paragraph", text: "Requests to change:" },
        {
          type: "list",
          items: [
            "Date",
            "Time",
            "Safari package",
            "Tour type",
            "Guest count",
            "Pickup location",
            "Add-ons",
          ],
        },
        { type: "paragraph", text: "are subject to availability and any price difference." },
        { type: "paragraph", text: "If the new service costs more, the customer must pay the difference. If it costs less, the treatment of the difference should follow the approved refund/payment process." },
      ],
    },
    {
      heading: "7. Cancellation or Material Change by Yala Wild Safari",
      blocks: [
        { type: "paragraph", text: "If Yala Wild Safari cannot provide the confirmed service due to an issue within its reasonable control, the business should offer an appropriate solution such as:" },
        {
          type: "list",
          items: [
            "Rescheduling to another available date/time,",
            "An equivalent replacement service accepted by the customer, or",
            "A refund of the applicable amount paid for the cancelled service.",
          ],
        },
        { type: "paragraph", text: "The customer should be informed as soon as reasonably possible." },
      ],
    },
    {
      heading: "8. National Park Closure, Weather and Force Majeure",
      blocks: [
        { type: "paragraph", text: "Safaris can be affected by events outside Yala Wild Safari's reasonable control, including:" },
        {
          type: "list",
          items: [
            "Severe weather",
            "Flooding or unsafe roads",
            "National park closures",
            "Government restrictions",
            "Natural disasters",
            "Civil/security restrictions",
            "Other force-majeure events",
          ],
        },
        { type: "paragraph", text: "Where the booked safari cannot proceed, Yala Wild Safari should first offer a reasonable reschedule or alternative where possible." },
        { type: "paragraph", text: "The exact refund treatment for force-majeure events and any already-purchased non-refundable park/third-party tickets must be finalized before publication." },
      ],
    },
    {
      heading: "9. Wildlife Sightings",
      blocks: [
        { type: "paragraph", text: "Wildlife sightings are never guaranteed." },
        { type: "paragraph", text: "A completed safari does not qualify for a refund simply because a customer did not see a particular animal, including leopards, elephants, sloth bears or specific bird species." },
      ],
    },
    {
      heading: "10. Park Entrance Tickets and Third-Party Fees",
      blocks: [
        { type: "paragraph", text: "Park entrance fees may be sold as a separate booking line item or paid separately depending on the selected experience." },
        { type: "paragraph", text: "If Yala Wild Safari prepays a government/third-party ticket on behalf of the customer, refundability may depend on the ticket provider's rules." },
        { type: "paragraph", text: "Any non-refundable third-party fee should be disclosed before the customer pays whenever possible." },
      ],
    },
    {
      heading: "11. Hambantota Cruise / Port Bookings",
      blocks: [
        { type: "paragraph", text: "Customers are responsible for providing accurate:" },
        {
          type: "list",
          items: [
            "Cruise ship name",
            "Arrival information",
            "Pickup details",
            "Required return time",
          ],
        },
        { type: "paragraph", text: "Port procedures, delayed ship arrival, customs/immigration delays and other circumstances outside Yala Wild Safari's control may affect the itinerary." },
        { type: "paragraph", text: "The final policy should specify how cancellations caused by cruise itinerary changes are treated. Until this is approved, do not promise an automatic refund for every cruise schedule change." },
      ],
    },
    {
      heading: "12. Taxi & Car Rental Cancellations",
      blocks: [
        { type: "paragraph", text: "Taxi, airport-transfer and car/van-with-driver cancellations should follow the same 24-hour general cancellation rule unless a specific quote clearly states different conditions." },
        { type: "paragraph", text: "Where the operator has already incurred non-refundable third-party costs, those costs may be deducted only if the customer was informed appropriately." },
      ],
    },
    {
      heading: "13. Refund Processing",
      blocks: [
        { type: "paragraph", text: "Approved refunds should be returned using the original payment method where reasonably possible." },
        { type: "paragraph", text: "The time for funds to appear in the customer's account may depend on:" },
        {
          type: "list",
          items: [
            "Payment gateway processing",
            "Card network",
            "Bank/payment provider",
            "Currency conversion",
          ],
        },
        { type: "paragraph", text: "The exact business refund-processing target (for example, number of business days to initiate a refund) should be confirmed and added before publication." },
      ],
    },
    {
      heading: "14. Currency and Bank Charges",
      blocks: [
        { type: "paragraph", text: "If a customer pays in one currency and receives a refund after an exchange-rate change, the amount received in their home currency may differ due to:" },
        {
          type: "list",
          items: [
            "Exchange-rate movement",
            "Bank conversion",
            "Card issuer fees",
            "Payment-provider fees",
          ],
        },
        { type: "paragraph", text: "Yala Wild Safari should refund the approved transaction amount according to the payment record, subject to the final gateway process and applicable law." },
      ],
    },
    {
      heading: "15. Returns Policy",
      blocks: [
        { type: "paragraph", text: "Yala Wild Safari primarily sells services and travel experiences, not physical products. Therefore, a traditional physical-product return process generally does not apply to safari, transport or booking services." },
        { type: "paragraph", text: "If physical merchandise is added to the website in the future, a separate product return policy should be created before those items are sold." },
      ],
    },
    {
      heading: "16. How to Cancel or Request a Refund",
      blocks: [
        { type: "paragraph", text: "Customers should contact Yala Wild Safari and provide:" },
        {
          type: "list",
          items: [
            "Booking reference",
            "Customer name",
            "Safari/service date",
            "Reason for cancellation/change",
            "Preferred new date if requesting a reschedule",
          ],
        },
        { type: "paragraph", text: "Contact channels:" },
        {
          type: "list",
          items: [
            "WhatsApp: 076 091 5578",
            "Phone: 076 043 5578",
            "Email: yalaleopardsafariride@gmail.com",
          ],
        },
        { type: "paragraph", text: "Cancellation is only considered received when the request reaches the business through an accepted contact channel or approved website cancellation function." },
      ],
    },
    {
      heading: "17. Policy Priority",
      blocks: [
        { type: "paragraph", text: "If a specific booking confirmation clearly contains service-specific cancellation terms that were disclosed before payment, those terms should apply together with this general policy to the extent permitted by applicable law." },
      ],
    },
  ],
};
