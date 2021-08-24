import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";

export default function SalesCRM({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Hubspot Sales CRM Integrations - Samespace" />
      <Section
        hero
        headline={["Supercharged Sales"]}
        copy={[
          "Give your team the CRM enhancement they need to get super productive. They’ll take and make double the calls per effortlessly thanks to automation and streamlined workflows. At the end of the day, that means more revenue for you.",
        ]}
        callToActions={
          <Button
            onClick={() => toggleDemoForm("Get Demo")}
            title="Get Demo"
            size="large"
          />
        }
        media={
          <ImageView
            src="/features/playbooks.png"
            alt="Samespace Playbooks"
            width="500"
            height="500"
            property
          />
        }
      />
      <LogoWall />
      <Section
        headline={["No More Manual Entry"]}
        copy={[
          "With Samespace, your reps don’t have to click around for data before a call, nor enter it afterwards. Everything’s automated, letting the calls flow fluidly all day long.",
        ]}
        showMediaFirst
        media={
          <ImageView
            src="/features/hubspot-call-logs.png"
            width={800}
            height={600}
            alt="Samespace Integration with Hubspot"
            quality={100}
          />
        }
      />
      <Section
        headline={["Live Monitoring and coaching"]}
        copy={[
          "Be there for your reps when it counts in real time using our easy on the eyes visibility features. You’ll see what each rep is up to so you can monitor their activity and support your team when needed.",
          "With call recordings saved and stored automatically in your CRM, you can use crucial learning tools to keep your team’s skill set sharp.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <ImageView
            src="/features/live-monitoring-and-coaching.png"
            width={500}
            height={500}
            alt="Samespace Integration with Hubspot"
            quality={100}
          />
        }
      />
      <Section
        headline={["Putting Data into Action"]}
        copy={[
          "With Samespace, data is always working for you. Our suped up API enables you to collate multiple data sources into one single set, so you can turn data into plans and plans into action concerning team productivity, customer trends, and more.",
        ]}
        showMediaFirst
        media={
          <ImageView
            src="/features/cc-analytics.png"
            width={500}
            height={500}
            alt="Samespace Integration with Hubspot"
            quality={100}
          />
        }
      />
      <Section
        headline={["See what an AI enhanced sales team can do."]}
        copy={[
          "Samespace’s AI powered insights use Speech Recognition to transcribe calls automatically log them into Salesforce. Our suped up API enables you to collate multiple data sources into one single set, so you can turn data into plans and plans into action concerning team productivity, customer trends, and more.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <ImageView
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
          <ImageView src="/logos/hear.svg" width="200px" height="56px" alt="Hear" />
        }
        personAvatar={
          <ImageView
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
        bannerAction={() => toggleDemoForm("Get Demo")}
        title="Take Hubspot to a higher level with Samespace."
      />
    </>
  );
}
