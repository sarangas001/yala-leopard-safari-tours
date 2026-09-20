import ParkChecklist from "@/components/ParkChecklist";

export default function KumanaPhotographyTips() {
  return (
    <ParkChecklist
      heading="Photography Tips"
      columns={[
        {
          icon: "check",
          items: [
            "Bring binoculars or a telephoto lens",
            "Keep noise low",
            "Wear neutral, comfortable clothing",
            "Follow driver/park instructions",
            "Never disturb or feed wildlife",
          ],
        },
      ]}
    />
  );
}
