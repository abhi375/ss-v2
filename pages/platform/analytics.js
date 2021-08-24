import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";

export default function AnalyticsPage({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Analytics - Samespace" />
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
          <Button
            onClick={() => toggleDemoForm("Get Demo")}
            title="Get Demo"
            size="large"
          />
        }
        media={
          <ImageView
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
          <ImageView
            src="/features/ss-dashboard.png"
            width={720}
            height={578}
            quality={100}
            alt="Samespace Analytics"
          />
        }
      />
      <Section
        headline={[
          <>
            <span className="block sm:inline">AI-Powered</span>
            <span> Sentiment Analysis</span>
          </>,
        ]}
        copy={[
          "We humans don’t just speak thoughts; we speak feelings. Samespace’s AI-powered sentiment analysis decodes the raw data of emotion to crucially supplement your NPS and CSAT tracking.",
          "We help you stay in tune with your customer base by recognizing words, phrases, and tones that shed light on the ever evolving trends of your products, brand, and competition, and the feelings that move them.",
        ]}
        media={
          <ImageView
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
          <ImageView
            src="/features/bring-your-own-data.png"
            width={520}
            height={520}
            quality={100}
            alt="Bring your own data"
          />
        }
      />

      <Testimonial
        quote="Compared to other products in the market Samespace is about 50% more efficient, and this has led to the increase in productivity."
        personName="CV Sai"
        personDesignation="AVP, Urban Company"
        companyLogo={
          <ImageView
            src="/logos/urban.svg"
            width="200px"
            height="40px"
            alt="Urban Clap Logo"
          />
        }
      />
      <LogoWall />
      <Banner
        title="Turn insights into action and action into results."
        bannerAction={() => toggleDemoForm("Get Demo")}
      />
    </>
  );
}
