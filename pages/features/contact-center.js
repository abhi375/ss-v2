import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function ContactCenterPage({ toggleDemoForm }) {
  return (
    <>
      <Section
        hero
        headline={[
          <>
            <span>Radically </span>
            <span className="bg-clip-text text-transparent bg-gradient bg-gradient-to-r from-accent to-indigo-500">
              simple{" "}
            </span>{" "}
            <span>and </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient bg-gradient-to-r from-accent to-indigo-500">
              affordable{" "}
            </span>
            <span> Contact Center Platform</span>
          </>,
        ]}
        copy={[
          "Built from the ground up with cutting edge Internet technologies, Samespace unites your business communication in one place, from anywhere.",
        ]}
        verticalPadding="py-14"
        callToActions={
          <Button title="Get a demo" size="large" onClick={toggleDemoForm} />
        }
        media={
          <Image
            src="/features/callcenter-hero.png"
            width={520}
            height={520}
            priority
            alt="Samespace Contact Center Platform"
          />
        }
      />
      <LogoWall />
      <Section
        headline={["A Single tool for Sales", " and Support"]}
        showMediaFirst
        copy={[
          "Samespace improves your agents conversations with prospects and customers. From phone calls to chatbots and beyond, you get more efficient, effective engagement every time.",
          "And for uncommon conversation flows, our APIs allow customization for unlimited adaptability.",
        ]}
        media={
          <Image
            src="/features/unified-tool.png"
            width={520}
            height={520}
            quality={100}
            alt="Unified Contact Center Platform"
          />
        }
      />
      <Section
        backgroundClass="bg-gray-50"
        headline={["AI agents for any contact center solution"]}
        copy={[
          "Whether you use our Contact Center Suite or your existing solution, Samespace AI agents can offload up to 60 % of tier 1 conversations. So your live agents are open for more valuable conversations.",
        ]}
        media={
          <Image
            src="/features/ai-with-other-callcenter.png"
            width={520}
            height={520}
            quality={100}
            alt="AI agents for any contact center solution"
          />
        }
      />
      <Section
        headline={["Integrate with all your apps."]}
        showMediaFirst
        copy={[
          "Many of our customers have existing CRM solutions, like Salesforce or HubSpot. We turn all of them into world-class contact center tools with off-the-shelf CTI integration, rapid custom integration using Samespace Studio, and adaptable open APIs.",
        ]}
        media={
          <Image
            src="/features/crm-integrations.png"
            width={520}
            height={520}
            quality={100}
            alt="Integrate with your CRM"
          />
        }
      />
      <Section
        backgroundClass="bg-gray-50"
        headline={["Live Monitoring and coaching"]}
        copy={[
          "Imagine every call handled by a top performer. We will help you get there with innovative analytics, monitoring & coaching features that allow managers and experienced agents to easily coach colleagues in real time.",
        ]}
        media={
          <Image
            src="/features/live-monitoring-and-coaching.png"
            width={520}
            height={520}
            quality={100}
            alt="Live monitoring and coaching"
          />
        }
      />
      <Section
        headline={["Web Chat & Web Call"]}
        showMediaFirst
        copy={[
          "Make your contact center truly Internet ready. Embed real time communication into your web.",
        ]}
        media={
          <Image
            src="/features/web-widget.png"
            width={520}
            height={520}
            quality={100}
            alt="Web Widget"
          />
        }
      />
      <Section
        backgroundClass="bg-gray-50"
        headline={["Powerful Insights"]}
        copy={[
          "Stop struggling to find data. With Samespace, the data finds you! Our powerful and simple analytics module shows AHT, ASA, sentiment, abandon rate, and more, all in one distinct display.",
          "Easily view, filter, save and export in seconds, so you can turn your insights into actions sooner.",
        ]}
        media={
          <Image
            src="/features/cc-analytics.png"
            width={520}
            height={520}
            quality={100}
            alt="Samespace Insights"
          />
        }
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
