import ParkChecklist from "@/components/ParkChecklist";

export default function BundalaWhatToBring() {
  return (
    <ParkChecklist
      heading="What to Bring"
      columns={[
        {
          icon: "check",
          items: [
            "Passport/ID",
            "Comfortable clothes and shoes",
            "Camera",
            "Binoculars",
            "Sunscreen",
            "Hat and sunglasses",
            "Drinking water if additional water is desired",
            "Cash where required",
          ],
        },
      ]}
    />
  );
}
