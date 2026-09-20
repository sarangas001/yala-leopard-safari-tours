// Example add-on catalogue with placeholder USD pricing. A real implementation
// needs each extra to support title, description, pricing method,
// availability by package/park and an active/inactive status managed from
// an admin system that doesn't exist yet — this is a static stand-in so the
// booking flow's calculation and UI can be demonstrated end to end.
export type BookingExtra = {
  id: string;
  label: string;
  description: string;
  price: number;
};

export const BOOKING_EXTRAS: BookingExtra[] = [
  { id: "breakfast", label: "Breakfast", description: "Packed breakfast for the drive.", price: 8 },
  { id: "lunch", label: "Lunch", description: "Packed lunch on full-day safaris.", price: 10 },
  { id: "snacks", label: "Snack Pack", description: "Light snacks and drinking water.", price: 5 },
  { id: "drinks", label: "Extra Drinks", description: "Additional bottled water and soft drinks.", price: 3 },
  { id: "child-seat", label: "Child Seat", description: "A child safety seat for the jeep.", price: 5 },
  { id: "binoculars", label: "Binocular Rental", description: "A pair of binoculars for the drive.", price: 5 },
  { id: "special-guide", label: "Special / Private Guide", description: "A dedicated guide for your group.", price: 25 },
  { id: "extended-pickup", label: "Extended Pickup Area", description: "Pickup from outside our standard coverage area.", price: 15 },
];

// Reference figure supplied for Yala ($43 pp / approx. LKR 13,000). Applied
// as a placeholder across all parks pending per-park confirmation — this
// must be made editable/configurable before launch, per the content brief.
export const ENTRANCE_TICKET_PRICE_USD = 43;
