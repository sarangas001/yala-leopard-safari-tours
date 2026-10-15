export type GoogleReview = {
  /** Reviewer's name exactly as shown on Google. */
  name: string;
  /** Relative date as shown on Google, e.g. "6 months ago". */
  date: string;
  /** Star rating, 1–5. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Full review text, in its original language. */
  text: string;
  /** Optional profile photo in /public, e.g. "/images/reviews/melinda.jpg". Falls back to the initial. */
  avatar?: string;
};

// Add new reviews at the top. Copy the text straight from Google.
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Melinda Brendler",
    date: "6 months ago",
    rating: 5,
    text: "Wir haben eine Halbtagessafari und eine Ganztagessafari bei Yala Leopard Safari Ride gebucht. Die Halbtagessafari fand im Block 5 des Yala Nationalparks statt, die Ganztagessafari im Block 1. Unser Guide war sehr freundlich, hilfsbereit und immer pünktlich. Außerdem kannte er sich hervorragend mit den Tieren aus! Dank ihm konnten wir drei Leoparden, zwei Elefanten, einen Bären, viele verschiedene Vogelarten und vieles mehr sehen. Es waren wirklich wunderschöne und unvergessliche Tage! Wir würden jederzeit wieder eine Safari bei ihm buchen und können ihn absolut weiterempfehlen.",
  },
  {
    "name": "Toby Ronneberger",
    "date": "6 months ago",
    "rating": 5,
    "text": "We had two perfect safaris yesterday and today in Block 5 and Block 1 of Yala National Park.\n\nEverything was perfectly planned. The driver was already at the hotel 15 minutes before departure and ready to pick us up. Our driver was also very friendly and always helpful.\n\nWe saw three leopards, two elephants, and a bear, as well as all sorts of other animal species found in the national park.\n\nThe price for 1.5 days was outstanding.\n\nI highly recommend this tour operator!"
  },
  {
    "name": "Mert Zabci",
    "date": "6 months ago",
    "rating": 5,
    "text": "Didn't know what to expect as heard leopards were super hard to spot. I don't know how our driver would spot them but we saw four leopards on a full day tour as well as a heap of other animals too. Our driver was awesome - really friendly and accommodating!"
  },
  {
    "name": "samith hasantha",
    "date": "6 months ago",
    "rating": 5,
    "text": "We had an incredible leopard safari ride at Yala National Park! 🐆🌿\nOur driver was very experienced and knew exactly where to go, giving us the best chance to spot a leopard. We were lucky enough to see one up close — truly unforgettable!\n\nThe jeep was comfortable and the whole experience was perfectly organized. Highly recommended for wildlife lovers visiting Sri Lanka! 🇱🇰✨"
  }
];
