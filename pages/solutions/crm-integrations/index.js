import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { HoverArrowIcon } from "@/components/Icons";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function CRMIntegrationPage() {
  return (
    <>
      <NextSeo title="CRM Integrations - Samespace" />
      <Section
        hero
        verticalPadding="py-16 lg:py-12"
        headline={["The Final Piece of Your", "CRM Puzzle"]}
        copy={[
          "Your CRM isn’t complete without Samespace. We seamlessly integrate into any CRM to make your contact center agile and adaptable, expertly enhancing all of your calls.",
        ]}
        callToActions={
          <div className="flex flex-col sm:flex-row items-center">
            <Link href="/solutions/crm-integrations/sales">
              <a className="text-lg px-9 py-3 rounded-full bg-accent text-white flex items-center justify-center font-semibold group hover:shadow-inset sm:mr-6 mb-6 sm:mb-0 w-full sm:w-auto">
                <span>For Sales</span>
                <HoverArrowIcon />
              </a>
            </Link>
            <Link href="/solutions/crm-integrations/service">
              <a className="text-lg px-9 py-3 rounded-full text-accent border border-solid flex items-center justify-center font-semibold group border-accent hover:text-white hover:bg-accent w-full sm:w-auto">
                For Service
                <HoverArrowIcon />
              </a>
            </Link>
          </div>
        }
        media={
          <Image
            width={520}
            height={520}
            priority
            quality={100}
            src="/features/crm-source.png"
            alt="Samespace Platform Components"
          />
        }
      />
      <LogoWall />
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
            width={520}
            height={520}
            quality={100}
            src={"/features/dynamic-routing-flow.png"}
            alt="Samespace Platform Components"
          />
        }
      />
      <Section
        headline={["Ditch the Time", " Wasting Tasks"]}
        copy={[
          "Let your agents focus on what’s important: talking to more prospects. Let Samespace handle the rest.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/notes-on-chrome-dock.png"}
            alt="Samespace Call Logging"
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
            width={520}
            height={520}
            quality={100}
            src={"/features/live-monitoring-and-coaching.png"}
            alt="Live monitoring and coaching"
          />
        }
      />

      <Section
        headline={["See What an AI Enhanced Sales Team Can Do"]}
        copy={[
          "Samespace’s AI powered insights use Speech Recognition to transcribe calls. Our APIs enable you to collate multiple data points into one single source, so your call flow gets smarter, faster.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/sentiment-analysis.png"}
            alt="Sentiment Analysis"
          />
        }
      />

      <Section
        showMediaFirst
        headline={["Customize Your Conversations"]}
        copy={[
          "What used to take weeks with developers now takes minutes thanks to our easy and intuitive Conversation Studio.",
        ]}
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/studio-flow.png"}
            alt="Samespace Studio"
          />
        }
      />

      <Testimonial
        quote="Samespace' ability to integrate with any CRM is what we liked the most about the product. For us, it took just a couple of hours to integrate to Instaview360 CRM."
        personName="CV Sai"
        personDesignation="AVP - Urban Company"
        companyLogo={
          <Image
            src="/logos/urban.svg"
            width="200px"
            height="40px"
            alt="Urban Logo"
          />
        }
      />

      <Banner title="Enhance your CRM, double your productivity." />
    </>
  );
}
