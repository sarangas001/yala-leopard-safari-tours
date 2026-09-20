export type PickupType = "hotel" | "undecided";

export type BookingConfig = {
  park: string;
  packageName: string;
  date: string;
  startTime: string;
  adults: number;
  children: number;
  infants: number;
  entranceTickets: boolean;
  extras: string[];
  pickupType: PickupType;
  hotelName: string;
  pickupNotes: string;
};

export const DEFAULT_BOOKING_CONFIG: Omit<BookingConfig, "park" | "packageName"> = {
  date: "",
  startTime: "",
  adults: 2,
  children: 0,
  infants: 0,
  entranceTickets: false,
  extras: [],
  pickupType: "hotel",
  hotelName: "",
  pickupNotes: "",
};
