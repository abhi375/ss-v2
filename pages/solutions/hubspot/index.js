import Banner from "@/components/Banner";
import { HoverArrowIcon } from "@/components/Icons";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function CRMIntegrationPage({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Hubspot Integrations - Samespace" />
      <Section
        hero
        backgroundClass="bg-[#2F404F]"
        foregroundClass="text-white"
        verticalPadding="py-16 lg:py-28"
        headline={["Supercharge Your Sales and Support Teams"]}
        copy={[
          "Our HubSpot Integration enables your entire team to streamline their call workflows, increase productivity, and track customers through the whole customer journey: from marketing to sales and success.",
        ]}
        callToActions={
          <div className="flex flex-col sm:flex-row items-center">
            <Link href="/solutions/hubspot/sales">
              <a className="text-lg px-9 py-3 rounded-full bg-[#FF6F1F] text-white flex items-center justify-center group hover:shadow-inset sm:mr-6 mb-6 sm:mb-0 w-full sm:w-auto font-semibold">
                <span>For Sales</span>
                <HoverArrowIcon />
              </a>
            </Link>
            <Link href="/solutions/hubspot/service">
              <a className="text-lg px-9 py-3 rounded-full text-[#FF6F1F] border border-solid flex items-center justify-center group border-[#FF6F1F] hover:text-white hover:bg-[#FF6F1F] w-full sm:w-auto font-semibold">
                <span>For Service</span>
                <HoverArrowIcon />
              </a>
            </Link>
          </div>
        }
        media={
          <Image
            src="/features/hubspot-dock-hero.png"
            width={800}
            height={600}
            priority
            alt="Samespace Hubspot Integrations"
            quality={100}
          />
        }
      />
      <LogoWall singleColumn />
      <Section
        headline={[
          "Connect Prospects to the Right Reps the First Time. Every Time.",
        ]}
        copy={[
          "Our dynamic routing directs inbound leads based on anything you know about the caller, including lead source, campaign, past interaction history, and more.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/dynamic-routing-flow.png"
            width={500}
            height={500}
            alt="Samespace Studio"
            quality={100}
          />
        }
      />
      <Section
        headline={["Ditch the time wasting tasks."]}
        copy={[
          "Let your agents focus on what’s important: talking to more prospects. Let Samespace handle the rest.",
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
        showMediaFirst
        headline={[
          "Get Your Reps",
          " the Help They Need",
          " When They Need It.",
        ]}
        copy={[
          "Be there for your reps when it counts in real time using our visibility features. And with call recordings saved and stored automatically in your CRM, you can use crucial learning tools to keep your team’s skill set sharp.",
        ]}
        media={
          <Image
            src="/features/live-monitoring-and-coaching.png"
            width={500}
            height={500}
            alt="Samespace Pulse"
            quality={100}
          />
        }
      />
      <Section
        headline={["See What an AI Enhanced Sales Team Can Do"]}
        copy={[
          "Our AI powered insights use Speech Recognition to transcribe calls. Our APIs enable you to collate multiple data points into one single source, so your call flow gets smarter, faster.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            src="/features/sentiment-analysis.png"
            width={500}
            height={500}
            alt="Sentiment Analysis"
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

      <Banner
        bannerAction={toggleDemoForm}
        title="Take Hubspot to a higher level with Samespace."
      />
    </>
  );
}
