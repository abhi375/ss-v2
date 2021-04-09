import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function SalesCRM() {
  return (
    <>
      <Section
        hero
        headline={["A Superior Sales Team"]}
        copy={[
          "Samespace makes your sales team super productive. They’ll handle double the calls with our automation and streamlined workflows.",
        ]}
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
      />
      <LogoWall />
      <Section
        headline={["No More Tab Switching"]}
        copy={[
          "Our Salesforce app is native, so that means everything you need is right inside Salesforce. Less tabs and click-hunting for your reps means their work gets done faster and easier.",
        ]}
        showMediaFirst
      />
      <Section
        headline={[
          "Connect Prospects to the Right Reps the First Time. Every Time.",
        ]}
        copy={[
          "Our dynamic routing directs leads based on anything you know about the caller, including lead source, campaign, past interaction history, and more.",
        ]}
      />
      <Section
        headline={["Streamline Your Call Flow"]}
        copy={[
          "Let your agents focus on what’s important: talking to more prospects. Let Samespace handle the rest.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["Get Your Reps the Help They Need, When They Need It."]}
        copy={[
          "Using our live monitoring and coaching, you’ll see what each rep is up to so you can monitor their activity and assist your team when needed, even during live calls.",
        ]}
      />
      <Section
        showMediaFirst
        headline={["AI-Powered Analytics"]}
        copy={[
          "Use AI-powered Sentiment Analysis to better understand your customer and make impactful, informed decisions.",
        ]}
      />
      <Testimonial
        quote="The first thing that differentiated Samespace was they matched solutions to our complex needs. Delivery team ensured our needs were met, and now our sales & service teams have a solid CTI solution."
        personName="Mukhtadir Syed"
        personDesignation="AVP - Sales and Customer Success"
        companyLogo={
          <Image
            src="/logos/endurance.svg"
            width="200px"
            height="56px"
            alt="Endurance Logo"
          />
        }
        personAvatar={
          <Image
            src="/people/mukhtadir.jpeg"
            width="64px"
            height="64px"
            objectFit="cover"
            className="rounded-full overflow-hidden"
            alt="Mukhtadir Syed"
          />
        }
      />
      <Banner />
    </>
  );
}
