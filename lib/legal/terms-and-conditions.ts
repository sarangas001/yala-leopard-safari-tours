import type { LegalPage } from "@/lib/legal/types";

export const termsAndConditions: LegalPage = {
  slug: "terms-and-conditions",
  title: "Terms & Conditions",
  metaDescription: "Terms and conditions for booking safari, transport and travel services with Yala Wild Safari.",
  website: "yalawildsafari.com",
  brand: "Yala Wild Safari",
  operator: "Yala Leopard Safari Tours",
  lastUpdated: "September 2026",
  draftNotice:
    "Draft for business/legal review before publication. Final company registration details, payment gateway details, age rules, package rules and any jurisdiction-specific wording should be confirmed before the page goes live.",
  sections: [
    {
      heading: "1. About These Terms",
      blocks: [
        { type: "paragraph", text: "These Terms & Conditions apply to use of the Yala Wild Safari website and to safari, transport and related travel services booked through Yala Wild Safari / Yala Leopard Safari Tours." },
        { type: "paragraph", text: "By making a booking, paying for a service or using the website, the customer agrees to these Terms together with the Privacy Policy and Refund, Cancellation & Return Policy." },
      ],
    },
    {
      heading: "2. Booking Information",
      blocks: [
        { type: "paragraph", text: "Customers are responsible for providing complete and accurate information, including:" },
        {
          type: "list",
          items: [
            "Full name",
            "Email address",
            "Phone/WhatsApp number",
            "Travel date",
            "Number and type of guests",
            "Pickup information",
            "Cruise or flight timing where relevant",
            "Any important accessibility, safety or operational information",
          ],
        },
        { type: "paragraph", text: "A booking is not confirmed until the required payment has been successfully received and a booking confirmation has been issued." },
      ],
    },
    {
      heading: "3. Safari Packages",
      blocks: [
        { type: "paragraph", text: "Available safari packages may include Half-Day, 7-Hour and Full-Day experiences in Yala, Udawalawe and Bundala National Parks." },
        { type: "paragraph", text: "Yala may include shared and private options depending on the selected package and availability. Udawalawe and Bundala are currently planned as private tours." },
        { type: "paragraph", text: "Package availability, timing, inclusions and prices may change. The details shown in the confirmed booking summary at checkout take priority over general promotional information." },
      ],
    },
    {
      heading: "4. Wildlife Sightings",
      blocks: [
        { type: "paragraph", text: "Wild animals move freely in their natural habitats. Yala Wild Safari cannot guarantee sightings of leopards, elephants, sloth bears, birds or any other species." },
        { type: "paragraph", text: "A lack of a particular wildlife sighting does not by itself qualify a completed safari for a refund." },
      ],
    },
    {
      heading: "5. Park Rules and Access",
      blocks: [
        { type: "paragraph", text: "All visitors must follow:" },
        {
          type: "list",
          items: [
            "National park rules",
            "Instructions from authorized park staff",
            "Reasonable instructions from the safari driver/guide",
            "Safety requirements applying to the selected experience",
          ],
        },
        { type: "paragraph", text: "Routes, park access and operating conditions may change because of weather, wildlife activity, road conditions, official park instructions, closures or safety considerations." },
      ],
    },
    {
      heading: "6. Park Entrance Tickets",
      blocks: [
        { type: "paragraph", text: "Park entrance tickets may be:" },
        {
          type: "list",
          items: [
            "Included in a package",
            "Offered as a separate prepaid add-on, or",
            "Payable separately at the park",
          ],
        },
        { type: "paragraph", text: "depending on the selected park/package and the final published booking rules." },
        { type: "paragraph", text: "The checkout page must clearly identify whether park entrance tickets are included or excluded. Government/park fees may change independently of Yala Wild Safari." },
      ],
    },
    {
      heading: "7. Pricing",
      blocks: [
        { type: "paragraph", text: "Prices may be displayed in USD and converted/displayed in other supported currencies where available." },
        { type: "paragraph", text: "The amount shown in the final booking summary is the booking price applicable to that transaction, subject to any clearly disclosed exchange-rate, bank or card-provider charges outside Yala Wild Safari's control." },
        { type: "paragraph", text: "All optional extras, transport charges, entrance tickets, taxes or service charges must be shown before payment where they apply." },
      ],
    },
    {
      heading: "8. Payment",
      blocks: [
        { type: "paragraph", text: "The website is intended to accept secure online card payments through the selected third-party payment gateway." },
        { type: "paragraph", text: "The current booking requirement supports:" },
        {
          type: "list",
          items: [
            "Full payment, or",
            "50% deposit, with the remaining 50% payable later according to the confirmed booking/payment process.",
          ],
        },
        { type: "paragraph", text: "Where a deposit option is used, the checkout and confirmation must clearly show:" },
        {
          type: "list",
          items: ["Total booking value", "Amount paid", "Remaining balance", "When/how the balance is due"],
        },
        { type: "paragraph", text: "Raw card details should be processed by the payment provider and should not be stored by Yala Wild Safari." },
      ],
    },
    {
      heading: "9. Shared Safari Availability",
      blocks: [
        { type: "paragraph", text: "Shared Yala safari seats are subject to availability and configured vehicle capacity. A booking is not secured until payment is confirmed." },
        { type: "paragraph", text: "Failed or abandoned payments should not permanently reserve seats." },
      ],
    },
    {
      heading: "10. Pickup and Customer Timing",
      blocks: [
        { type: "paragraph", text: "Customers should be ready at the confirmed pickup time and location. Pickup time can vary based on hotel location, traffic, port procedures, park operating conditions and other reasonable operational factors." },
        { type: "paragraph", text: "For cruise, flight or time-sensitive bookings, customers must provide accurate arrival/departure details and allow a reasonable time buffer." },
        { type: "paragraph", text: "Yala Wild Safari should not advertise a guaranteed ship/flight connection unless such guarantee is expressly included in the confirmed booking." },
      ],
    },
    {
      heading: "11. Hambantota Port to Yala Service",
      blocks: [
        { type: "paragraph", text: "The current service is designed as a round trip from Hambantota International Cruise Port or a Hambantota hotel to a Yala safari and return to the agreed Hambantota location." },
        { type: "paragraph", text: "Customers must provide accurate port/ship timing information. Port procedures, immigration/customs delays, traffic, park conditions and other events can affect timing." },
      ],
    },
    {
      heading: "12. Taxi & Car Rental with Driver",
      blocks: [
        { type: "paragraph", text: "Transport services may be priced per kilometre and by vehicle type." },
        { type: "paragraph", text: "The current service requirements state that driver and fuel are included, while the following may be charged separately where applicable:" },
        {
          type: "list",
          items: ["Waiting time", "Parking", "Toll charges", "Overnight driver charges", "Other specifically disclosed extras"],
        },
        { type: "paragraph", text: "The customer must review the confirmed route, vehicle and quote before payment/confirmation." },
      ],
    },
    {
      heading: "13. Customer Conduct",
      blocks: [
        { type: "paragraph", text: "Customers must not:" },
        {
          type: "list",
          items: [
            "Endanger wildlife, staff, drivers or other guests",
            "Violate park rules",
            "Use prohibited drones where not permitted",
            "Bring illegal drugs",
            "Behave in a way that makes the experience unsafe",
          ],
        },
        { type: "paragraph", text: "Yala Wild Safari may end or modify an experience where reasonably necessary for safety or legal compliance. Refund eligibility in such circumstances depends on the cause and the approved refund policy." },
      ],
    },
    {
      heading: "14. Health and Safety",
      blocks: [
        { type: "paragraph", text: "Safari roads can be rough and conditions vary. Customers should disclose material accessibility or safety requirements before booking." },
        { type: "paragraph", text: "The current operational guidance notes that safari travel may not be suitable for some pregnant travelers or guests with serious back problems. Customers should make an appropriate personal/medical decision and seek medical advice where needed." },
      ],
    },
    {
      heading: "15. Changes by Yala Wild Safari",
      blocks: [
        { type: "paragraph", text: "Yala Wild Safari may reasonably change:" },
        {
          type: "list",
          items: ["Driver/vehicle", "Route", "Pickup time", "Safari route within the park", "Meal arrangements", "Other operational details"],
        },
        { type: "paragraph", text: "when required by safety, weather, park rules, vehicle issues or circumstances outside reasonable control, while aiming to provide an equivalent service where possible." },
        { type: "paragraph", text: "Material cancellations or service failures will be handled under the Refund, Cancellation & Return Policy." },
      ],
    },
    {
      heading: "16. Cancellation and Refunds",
      blocks: [
        { type: "paragraph", text: "The current general requirement provides free cancellation up to 24 hours before the scheduled safari for a full refund, subject to the detailed Refund, Cancellation & Return Policy and any clearly disclosed third-party/non-refundable costs." },
        { type: "paragraph", text: "The dedicated policy page governs refund processing, deposits, late cancellations, operator cancellations and service-specific exceptions." },
      ],
    },
    {
      heading: "17. Promotions and Coupon Codes",
      blocks: [
        { type: "paragraph", text: "Promotional offers/coupon codes may have:" },
        {
          type: "list",
          items: ["Eligibility conditions", "Expiry dates", "Package restrictions", "Minimum booking values", "Usage limits"],
        },
        { type: "paragraph", text: "Unless expressly stated, promotions cannot be exchanged for cash or combined with other promotions." },
      ],
    },
    {
      heading: "18. Website Content",
      blocks: [
        { type: "paragraph", text: "Website text, branding, photos, videos and design may be protected by intellectual-property rights. Users may not reproduce or commercially reuse website content without permission except where allowed by law." },
      ],
    },
    {
      heading: "19. Third-Party Services and Links",
      blocks: [
        { type: "paragraph", text: "The website may integrate or link to services such as:" },
        {
          type: "list",
          items: ["Payment gateways", "Google Maps", "Google reviews", "TripAdvisor", "GetYourGuide", "Airbnb", "Social media platforms"],
        },
        { type: "paragraph", text: "Those third-party services may apply their own terms and privacy practices." },
      ],
    },
    {
      heading: "20. Privacy and Cookies",
      blocks: [
        { type: "paragraph", text: "Personal information is handled according to the Privacy Policy. Cookies and similar technologies are described in the Cookie Policy." },
      ],
    },
    {
      heading: "21. Limitation and Force Majeure",
      blocks: [
        { type: "paragraph", text: "Travel and wildlife experiences can be affected by circumstances outside reasonable control, including severe weather, government/park closures, natural events, road closures, civil restrictions or other force-majeure events." },
        { type: "paragraph", text: "Final liability and force-majeure wording should be reviewed before publication to ensure compliance with applicable law and consumer rights." },
      ],
    },
    {
      heading: "22. Governing Law",
      blocks: [
        { type: "paragraph", text: "Proposed direction: These Terms should be governed by the applicable laws of Sri Lanka, without removing any mandatory consumer rights that apply to an international customer." },
        { type: "paragraph", text: "Final legal wording to be approved before publication." },
      ],
    },
  ],
};
