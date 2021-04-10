import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function AnalyticsPage({ toggleDemoForm }) {
  return (
    <>
      <Section
        backgroundClass="bg-accent bg-opacity-5"
        hero
        headline={[
          <>
            <span>Better</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-accent to-indigo-500">
              Insights
            </span>{" "}
            <span> with Meticulous Metrics.</span>
          </>,
        ]}
        copy={[
          "Get the dashboards and comprehensive measurements you need to improve your conversations with prospects and customers.",
        ]}
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
        media={
          <Image
            src="/features/analytics-hero.png"
            width={520}
            height={520}
            quality={100}
            alt="Samespace Analytics"
          />
        }
      />

      <Section
        headline={["Powerful Insights"]}
        showMediaFirst
        copy={[
          "Stop struggling to find data. With Samespace, the data finds you! Our powerful and simple analytics module shows AHT, ASA, sentiment, abandon rate, and more, all in one distinct display.",
          "Easily view, filter, save and export in seconds, so you can turn your insights into actions sooner.",
        ]}
        media={
          <Image
            src="/features/ss-dashboard.png"
            width={720}
            height={578}
            quality={100}
            alt="Samespace Analytics"
          />
        }
      />
      <Section
        headline={["AI-Powered", " Sentiment Analysis"]}
        copy={[
          "We humans don’t just speak thoughts; we speak feelings. Samespace’s AI-powered sentiment analysis decodes the raw data of emotion to crucially supplement your NPS and CSAT tracking.",
          "We help you stay in tune with your customer base by recognizing words, phrases, and tones that shed light on the ever evolving trends of your products, brand, and competition, and the feelings that move them.",
        ]}
        media={
          <Image
            src="/features/sentiment-analysis.png"
            width={520}
            height={520}
            quality={100}
            alt="Bring your own data"
          />
        }
      />
      <Section
        headline={["Bring your own data"]}
        showMediaFirst
        copy={[
          "Our analytics tool is suped up enough to be your single visualization engine. That’s by design. Many of our midsize customers use Samespace to visualize data across platforms, displaying their entire call center operations at a glance.",
          "If you have your own BI or visualization software, you can easily send Samespace data to the tool of your choice.",
        ]}
        media={
          <Image
            src="/features/bring-your-own-data.png"
            width={520}
            height={520}
            quality={100}
            alt="Bring your own data"
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
      <LogoWall backgroundClass="bg-white" />
      <Banner
        title="Turn insights into action and action into results."
        bannerAction={toggleDemoForm}
      />
    </>
  );
}
