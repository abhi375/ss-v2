import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import ImageView from "@/components/ImageView";
import ReactPlayer from "react-player";
import { isMobile } from "react-device-detect";
import { NextSeo } from "next-seo";

export default function SalesCRM({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Samespace for Salesforce Sales" />
      <Section
        hero
        headline={[
          <>
            <span>A Superior</span>
            <span className="block sm:inline"> Sales Team</span>
          </>,
        ]}
        verticalPadding="py-20 lg:py-28"
        copy={[
          "Samespace makes your sales team super productive. They’ll handle double the calls with our automation and streamlined workflows.",
        ]}
        callToActions={
          <Button
            onClick={() => toggleDemoForm("Get Demo")}
            title="Get Demo"
            size="large"
          />
        }
        media={
          <div className="w-full h-full overflow-hidden rounded-lg">
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                width="100%"
                height="100%"
                className="absolute inset-0"
                loop={isMobile}
                playsinline
                url={"https://youtu.be/wKmQgYmJ8Os"}
              />
            </div>
          </div>
        }
      />
      <LogoWall singleColumn />
      <Section
        headline={["No More Tab Switching"]}
        copy={[
          "Our Salesforce app is native, so that means everything you need is right inside Salesforce. Less tabs and click-hunting for your reps means their work gets done faster and easier.",
        ]}
        showMediaFirst
        media={
          <ImageView
            src="/features/native-sf-app.png"
            alt="Native Salesforce App"
            width={800}
            height={640}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          "Connect Prospects to the Right Reps the First Time. Every Time.",
        ]}
        backgroundClass="bg-gray-50"
        copy={[
          "Our dynamic routing directs leads based on anything you know about the caller, including lead source, campaign, past interaction history, and more.",
        ]}
        media={
          <ImageView
            src="/features/dynamic-routing-flow.png"
            alt="Dynmaic Routing"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Section
        headline={["Streamline Your Call Flow"]}
        copy={[
          "Let your agents focus on what’s important: talking to more prospects. Let Samespace handle the rest.",
        ]}
        showMediaFirst
        media={
          <ImageView
            src="/features/sf-call-logging.png"
            alt="Native Salesforce App"
            width={880}
            height={640}
            quality={100}
          />
        }
      />
      <Section
        headline={["Get Your Reps the Help They Need, When They Need It."]}
        backgroundClass="bg-gray-50"
        copy={[
          "Using our live monitoring and coaching, you’ll see what each rep is up to so you can monitor their activity and assist your team when needed, even during live calls.",
        ]}
        media={
          <ImageView
            src="/features/pulse.png"
            alt="Samespace Pulse"
            width={800}
            height={640}
            quality={100}
          />
        }
      />
      <Section
        showMediaFirst
        headline={["AI-Powered Analytics"]}
        copy={[
          "Use AI-powered Sentiment Analysis to better understand your customer and make impactful, informed decisions.",
        ]}
        media={
          <ImageView
            src="/features/sentiment-analysis.png"
            alt="Samespace + Salesforce"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Testimonial
        quote="Samespace has helped us implement a very unique CTI solution according to our business needs. Their ability to integrate with Salesforce and provide business specific customization is very unique. Our sales team enjoys using Samespace Dock integrated with Salesforce."
        personName="Swadeep Singh Khurana"
        personDesignation="Senior Product Manager at Simplilearn"
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
            src="/people/swadeep.jpeg"
            width="64px"
            height="64px"
            objectFit="cover"
            className="rounded-full overflow-hidden"
            alt="Swadeep Singh Khurana"
          />
        }
      />
      <Banner />
    </>
  );
}
