import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function ContactCenterPage({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Contact Center - Samespace" />
      <Section
        hero
        backgroundClass="bg-gray-50"
        headline={[
          <>
            <span>
              Radically <span className="text-accent">simple</span> and{" "}
              <span className="text-accent">affordable</span> Contact Center
              Platform
            </span>
          </>,
        ]}
        copy={[
          "Built from the ground up with cutting edge Internet technologies, Samespace unites your business communication in one place, from anywhere.",
        ]}
        verticalPadding="py-14"
        callToActions={
          <Button
            title="Get Demo"
            size="large"
            onClick={() => toggleDemoForm("Get Demo")}
          />
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
        headline={["Live Monitoring", " and coaching"]}
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

      <Section
        headline={["AI agents for any contact center solution"]}
        showMediaFirst
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
        headline={["Integrate with all", " your apps."]}
        backgroundClass="bg-gray-50"
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

      <Testimonial
        quote="Constant innovation in areas like dialer solution and crm integration has been a game-changing experience for us to serve our most valuable customers."
        personName="Deepak Bisht"
        personDesignation="IT Head at Hear.com"
        companyLogo={
          <Image src="/logos/hear.svg" width="200px" height="56px" alt="Hear" />
        }
        personAvatar={
          <Image
            src="/people/deepak.jpg"
            width="64px"
            height="64px"
            objectFit="cover"
            className="rounded-full overflow-hidden"
            alt="Deepak Bisht"
          />
        }
      />

      <LogoWall />
      <Banner bannerAction={() => toggleDemoForm("Get Demo")} />
    </>
  );
}
