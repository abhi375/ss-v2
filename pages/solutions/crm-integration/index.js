import Button from "@/components/Button";
import Section from "@/components/Section";

export default function CRMIntegrationPage() {
  return (
    <>
      <Section
        hero
        headline={["The Final Piece of Your", "CRM Puzzle"]}
        copy={[
          "Your CRM isn’t complete without Samespace. We seamlessly integrate into any CRM to make your contact center agile and adaptable, expertly enhancing all of your calls.",
        ]}
        callToActions={<Button title="Get a demo" size="large" />}
      />
    </>
  );
}
