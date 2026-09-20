import type { LegalPage } from "@/lib/legal/types";

export const cookiePolicy: LegalPage = {
  slug: "cookie-policy",
  title: "Cookie Policy",
  metaDescription: "How Yala Wild Safari uses cookies and similar technologies on yalawildsafari.com.",
  website: "yalawildsafari.com",
  brand: "Yala Wild Safari",
  operator: "Yala Leopard Safari Tours",
  lastUpdated: "September 2026",
  draftNotice:
    "Draft for review before publication. The final cookie list must be generated from the actual production website after all booking, analytics, advertising, embedded-content and consent tools are installed.",
  sections: [
    {
      heading: "1. What Are Cookies?",
      blocks: [
        { type: "paragraph", text: "Cookies are small text files or similar technologies stored on a user's device when they visit a website. They can help a website function correctly, remember user preferences, measure website performance and, where permitted, support advertising and conversion measurement." },
      ],
    },
    {
      heading: "2. How Yala Wild Safari May Use Cookies",
      blocks: [
        { type: "paragraph", text: "Depending on the final website setup, yalawildsafari.com may use cookies and similar technologies for:" },
        {
          type: "list",
          items: [
            "Core website functionality",
            "Booking and checkout functionality",
            "Security and fraud prevention",
            "Remembering language/currency or other preferences",
            "Analytics and website performance measurement",
            "Advertising and conversion tracking",
            "Embedded third-party services",
            "Cookie-consent preference storage",
          ],
        },
      ],
    },
    {
      heading: "3. Cookie Categories",
      blocks: [
        { type: "paragraph", text: "Strictly Necessary Cookies" },
        { type: "paragraph", text: "These are required for important website functions and may include cookies used for:" },
        {
          type: "list",
          items: [
            "Session management",
            "Booking/checkout functionality",
            "Shopping/booking selections",
            "Security",
            "Payment-flow state",
            "Cookie-consent preferences",
          ],
        },
        { type: "paragraph", text: "Where legally permitted, strictly necessary cookies may operate without optional consent because the website cannot provide the requested service correctly without them." },
        { type: "paragraph", text: "Preference / Functional Cookies" },
        { type: "paragraph", text: "These may remember choices such as:" },
        {
          type: "list",
          items: [
            "Preferred language",
            "Preferred currency",
            "User interface preferences",
            "Previously selected settings",
          ],
        },
        { type: "paragraph", text: "Analytics Cookies" },
        { type: "paragraph", text: "These may help understand how visitors use the website, for example:" },
        {
          type: "list",
          items: [
            "Pages viewed",
            "Traffic sources",
            "Device/browser type",
            "User interactions",
            "Booking funnel performance",
            "Conversion events",
          ],
        },
        { type: "paragraph", text: "The current project requirements include Google Analytics. The final production implementation should determine the exact cookies and consent behavior." },
        { type: "paragraph", text: "Advertising / Marketing Cookies" },
        { type: "paragraph", text: "These may be used to measure advertising campaigns, conversions or remarketing audiences." },
        { type: "paragraph", text: "The current project requirements include Meta Pixel and may include other advertising/conversion tools." },
        { type: "paragraph", text: "Optional advertising technologies should respect the user's consent choices where required." },
        { type: "paragraph", text: "Embedded Content / Third-Party Cookies" },
        { type: "paragraph", text: "The website may contain services or embedded content from third parties such as:" },
        {
          type: "list",
          items: [
            "Google Maps",
            "Google Reviews",
            "TripAdvisor",
            "Instagram/Facebook",
            "GetYourGuide",
            "Airbnb",
            "Payment providers",
          ],
        },
        { type: "paragraph", text: "These third parties may set cookies or collect technical information when their content is loaded or used, according to their own policies and the site's consent configuration." },
      ],
    },
    {
      heading: "4. Cookie Consent",
      blocks: [
        { type: "paragraph", text: "Where required, visitors should be shown a cookie consent banner before optional analytics/advertising cookies are activated." },
        { type: "paragraph", text: "Recommended controls:" },
        {
          type: "list",
          items: ["Accept All", "Reject Optional", "Manage Preferences"],
        },
        { type: "paragraph", text: "The preference center should allow users to make separate choices for optional categories where technically appropriate." },
      ],
    },
    {
      heading: "5. Changing Cookie Preferences",
      blocks: [
        { type: "paragraph", text: "Users should be able to reopen the website's cookie settings at any time through a persistent link such as:" },
        {
          type: "list",
          items: ["Cookie Settings"],
        },
        { type: "paragraph", text: "This link should be available in the footer or privacy area." },
        { type: "paragraph", text: "Users can also manage cookies through their browser settings, but blocking essential cookies may prevent parts of the booking or checkout process from working correctly." },
      ],
    },
    {
      heading: "6. Google Analytics",
      blocks: [
        { type: "paragraph", text: "If Google Analytics is enabled, it may use cookies or similar technologies to provide aggregated information about website traffic and interactions." },
        { type: "paragraph", text: "Before launch, confirm:" },
        {
          type: "list",
          items: [
            "Google Analytics property/version",
            "Consent Mode implementation where applicable",
            "Data retention setting",
            "Advertising features enabled/disabled",
            "IP/data configuration",
          ],
        },
      ],
    },
    {
      heading: "7. Meta Pixel",
      blocks: [
        { type: "paragraph", text: "If Meta Pixel is enabled, it may be used to measure actions such as page views, booking interactions and completed purchases/bookings, depending on consent and the final implementation." },
        { type: "paragraph", text: "The production configuration should be checked so that optional tracking respects the user's cookie-consent status where required." },
      ],
    },
    {
      heading: "8. Payment and Booking Cookies",
      blocks: [
        { type: "paragraph", text: "The booking platform/payment gateway may use technically necessary cookies or session identifiers to:" },
        {
          type: "list",
          items: [
            "Preserve the selected safari/package",
            "Maintain checkout state",
            "Prevent duplicate transactions",
            "Verify payment status",
            "Support fraud prevention",
          ],
        },
        { type: "paragraph", text: "The exact provider and cookies must be added after the final payment gateway and booking architecture are confirmed." },
      ],
    },
    {
      heading: "9. How Long Cookies Last",
      blocks: [
        { type: "paragraph", text: "Cookies may be:" },
        {
          type: "list",
          items: [
            "Session cookies – deleted when the browser/session ends, or",
            "Persistent cookies – retained for a defined period.",
          ],
        },
        { type: "paragraph", text: "The final policy should include actual cookie names, providers, purposes and durations from a production cookie scan." },
      ],
    },
    {
      heading: "10. Third-Party Privacy Policies",
      blocks: [
        { type: "paragraph", text: "Third-party services are responsible for their own privacy and cookie practices. Where useful, the live policy should link to the privacy/cookie notices of the actual providers used on the production website." },
      ],
    },
    {
      heading: "11. Updates to This Policy",
      blocks: [
        { type: "paragraph", text: "This Cookie Policy may be updated when website functionality, service providers or tracking technologies change. The page should always display the latest update/effective date." },
      ],
    },
  ],
};
