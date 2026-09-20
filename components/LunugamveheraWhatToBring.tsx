import ParkChecklist from "@/components/ParkChecklist";

export default function LunugamveheraWhatToBring() {
  return (
    <ParkChecklist
      heading="What to Bring"
      columns={[
        {
          icon: "check",
          items: [
            "Passport or ID",
            "Comfortable clothes and shoes",
            "Camera",
            "Binoculars",
            "Sunscreen",
            "Hat and sunglasses",
            "Cash where required",
          ],
        },
      ]}
    />
  );
}
