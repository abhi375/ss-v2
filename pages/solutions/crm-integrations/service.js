import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function SalesCRM({ toggleDemoForm }) {
  return (
    <>
      <Section
        hero
        headline={["Enhance your CRM and double your productivity"]}
        copy={[
          "Streamline your support team’s productivity by automating data entry and their call workflow.",
        ]}
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
      />
      <LogoWall />
      <Section
        headline={["Put AI to work"]}
        copy={[
          "Samespace AI agents can offload up to 60 % of tier 1 conversations, so your live agents are open for more valuable conversations.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["Instant Information"]}
        copy={[
          "Samespace CTI provides reps with rich contextual data that helps them serve faster. Inbound and outbound calls trigger a screenpop that provides data about prospects including past calls, notes, conversation info and key insights",
        ]}
      />
      <Section
        headline={["No More Manual Entry"]}
        copy={[
          "Skip the time wasting busywork and let Samespace's native CTI automatically sync all call data, immediately triggering the next conversation for your agent.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["Customer Feedback", " from Every Call"]}
        copy={[
          "Know for certain what your customers are thinking with a CSAT survey that collects feedback as soon an agent hangs up.",
        ]}
      />
      <Section
        headline={["Optimized Omnichannel Experiences"]}
        copy={[
          "Connect every channel and platforms your team uses to support customers, no matter where you interact with them. By meeting the customer on their channel of choice, you’re able to curate the best possible experience for that individual, every time.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["Stay in Sync with", " Your Customers"]}
        copy={[
          "Access crucial data on what your customers are saying during calls, including feedback on your product, as well as mentions of competitors, so you can implement changes to make improvements across the board.",
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
      <Banner bannerAction={toggleDemoForm} />
    </>
  );
}
