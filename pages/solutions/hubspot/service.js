import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function SalesCRM({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Service CRM Integrations - Samespace" />
      <Section
        hero
        headline={["The Missing Piece of Your Hubspot Puzzle"]}
        copy={[
          "Our Hubspot app streamlines your customer service team’s productivity by automating data entry and their call workflow like never before, saving them time and empowering them to work smarter and harder.",
        ]}
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
        media={
          <Image
            src="/features/hubspot-missing-piece.png"
            width={500}
            height={500}
            property
            alt="Samespace Integration with Hubspot"
            quality={100}
          />
        }
      />
      <LogoWall />
      <Section
        showMediaFirst
        headline={["Instant Information"]}
        copy={[
          "Samespace CTI provides reps with rich contextual data that helps them serve faster. Inbound and outbound calls trigger a screenpop that provides data about prospects including past calls, notes, conversation info and key insights.",
        ]}
        media={
          <Image
            src="/features/hubspot-screen-pop.png"
            width={840}
            height={560}
            alt="Samespace Integration with Hubspot"
            quality={100}
          />
        }
      />
      <Section
        headline={["No More Manual Entry"]}
        copy={[
          "Skip the time wasting busywork and let Samespace's native CTI automatically sync all call data, immediately triggering the next conversation for your agent.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            src="/features/hubspot-call-logs.png"
            width={800}
            height={600}
            alt="Samespace Integration with Hubspot"
            quality={100}
          />
        }
      />
      <Section
        headline={["Put AI to work"]}
        copy={[
          "60% of your tier-1 customer queries can be handled by Samespace AI bots, freeing up your live agents for more valuable conversations.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/ai-workload.png"
            width={500}
            height={500}
            alt="AI Workload"
            quality={100}
          />
        }
      />
      <Section
        headline={["Customer Feedback from Every Call"]}
        backgroundClass="bg-gray-50"
        copy={[
          "Know for certain what your customers are thinking with a CSAT survey that collects feedback as soon an agent hangs up.",
        ]}
        media={
          <Image
            src="/features/csat.png"
            width={640}
            height={400}
            alt="CSAT"
            quality={100}
          />
        }
      />
      <Section
        headline={["The Next Evolution in Omnichannel Experiences"]}
        copy={[
          "Allow customers to connect with you on their channel of choice, and curate the best possible experience for that individual, every time.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/omnichannel-flow.png"
            width={500}
            height={500}
            alt="Omnichannel Flows with Samespace Studio"
            quality={100}
          />
        }
      />

      <Section
        headline={["Stay in Sync with", " Your Customers"]}
        backgroundClass="bg-gray-50"
        copy={[
          "Access crucial data on what your customers are saying during calls, including feedback on your product, as well as mentions of competitors, so you can implement changes to make improvements across the board.",
        ]}
        media={
          <Image
            src="/features/ai-enhanced-hubspot-cti.png"
            width={500}
            height={500}
            alt="Samespace AI Assist"
            quality={100}
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
      <Banner bannerAction={toggleDemoForm} />
    </>
  );
}
