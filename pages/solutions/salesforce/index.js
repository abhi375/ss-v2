import Banner from "@/components/Banner";
import { HoverArrowIcon } from "@/components/Icons";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";
import Link from "next/link";

export default function CRMIntegrationPage({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Samespace for Salesforce" />
      <Section
        hero
        foregroundClass="text-white"
        backgroundClass="bg-gradient-to-r from-[#1A81E2] to-accent"
        headline={["The Full Force of Salesforce"]}
        copy={[
          "Take your Salesforce to the next level with our native CTI and automation.",
        ]}
        verticalPadding="py-16 lg:py-24"
        callToActions={
          <div className="flex flex-col sm:flex-row items-center">
            <Link href="/solutions/salesforce/sales">
              <a className="text-lg px-6 py-2.5 rounded-full bg-white group text-accent flex items-center justify-center hover:shadow-inset sm:mr-6 mb-6 sm:mb-0 w-full sm:w-auto font-semibold">
                <span> For Sales</span>
                <HoverArrowIcon />
              </a>
            </Link>
            <Link href="/solutions/salesforce/service">
              <a className="text-lg px-6 py-2.5 rounded-full text-white border border-solid flex items-center justify-center group border-white hover:text-accent hover:bg-white w-full sm:w-auto font-semibold">
                <span>For Service</span>
                <HoverArrowIcon />
              </a>
            </Link>
          </div>
        }
        media={
          <ImageView
            src="/features/sf-automation-hero.png"
            alt="Samespace + Salesforce"
            width={1000}
            height={800}
            priority
            quality={100}
          />
        }
      />
      <LogoWall singleColumn />
      <Section
        headline={["2x the Calls"]}
        copy={[
          "Double your productivity by allowing teams to handle twice as many calls while automatically logging call activity.",
        ]}
        showMediaFirst
        media={
          <ImageView
            src="/features/playbooks.png"
            alt="Samespace Playbooks"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Section
        backgroundClass="bg-gray-50"
        headline={["Deeper Insights with AI"]}
        copy={[
          "Access crucial data on what your customers are saying during calls including feedback on your product, as well as mentions of competitors, so you can implement changes to make improvements across the board.",
        ]}
        media={
          <ImageView
            src="/features/sentiment-analysis.png"
            alt="Samespace Sentiment Analysis"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Section
        showMediaFirst
        headline={["Raise Your Call IQ"]}
        copy={[
          "The smart solution to your prospect call flow. Leverage intelligent routing to make sure the right agent gets the call every time.",
        ]}
        media={
          <ImageView
            src="/features/studio-flow.png"
            alt="Samespace Studio"
            width={500}
            height={500}
            quality={100}
          />
        }
      />

      <Testimonial
        quote="A solid CTI solution integrated within Salesforce."
        personName="Mukhtadir Syed"
        personDesignation="AVP - Sales and Customer Success"
        companyLogo={
          <ImageView
            src="/logos/endurance.svg"
            width="200px"
            height="56px"
            alt="Endurance Logo"
          />
        }
        personAvatar={
          <ImageView
            src="/people/mukhtadir.jpeg"
            width="64px"
            height="64px"
            objectFit="cover"
            className="rounded-full overflow-hidden"
            alt="Endurance Logo"
          />
        }
      />

      <Banner
        bannerAction={() => toggleDemoForm("Get Demo")}
        title="Get the most out of Salesforce."
      />
    </>
  );
}
