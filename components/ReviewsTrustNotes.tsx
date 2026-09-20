import ParkChecklist from "@/components/ParkChecklist";

export default function ReviewsTrustNotes() {
  return (
    <ParkChecklist
      heading="Trust &amp; Authenticity"
      intro="A few things we hold ourselves to when it comes to reviews."
      columns={[
        {
          icon: "check",
          items: [
            "We never generate or edit reviews on a guest's behalf.",
            "Reviews collected directly through this website are clearly labeled apart from those sourced from external platforms.",
            "Platform logos and badges are displayed in accordance with each platform's usage guidelines.",
          ],
        },
      ]}
    />
  );
}
