import ParkChecklist from "@/components/ParkChecklist";

export default function KumanaWhatToBring() {
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
            "Cash where required",
          ],
        },
      ]}
    />
  );
}
