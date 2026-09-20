import ParkChecklist from "@/components/ParkChecklist";

export default function YalaWhatToBring() {
  return (
    <ParkChecklist
      heading="What to Bring &amp; Important Information"
      columns={[
        {
          heading: "What to Bring",
          icon: "check",
          items: [
            "Passport or ID",
            "Comfortable clothing",
            "Comfortable shoes",
            "Camera",
            "Binoculars",
            "Sunscreen",
            "Hat",
            "Sunglasses",
            "Cash where needed",
          ],
        },
        {
          heading: "Important Information",
          icon: "info",
          items: [
            "Morning safari starts early; guests should be ready at the confirmed pickup time.",
            "Pickup time may vary depending on hotel location.",
            "Wildlife sightings cannot be guaranteed.",
            "Routes can change due to weather, park conditions or safety.",
            "Safari roads can be rough.",
            "Guests should follow park rules and the driver's instructions.",
            "Drones, alcohol and drugs are not allowed.",
          ],
        },
      ]}
    />
  );
}
