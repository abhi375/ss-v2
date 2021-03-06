import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";

export default function StudioPage({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Studio - Samespace" />
      <Section
        hero
        headline={[
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-accent to-indigo-600">
            Drag. Drop. Done.
          </span>,
        ]}
        copy={[
          "Our Conversation Studio is uniquely intuitive and easy to use, reducing training and deployment times to an absolute minimum.",
        ]}
        backgroundClass="bg-gray-50"
        textAlignment="center"
        columns="one"
        callToActions={
          <Button
            onClick={() => toggleDemoForm("Get Demo")}
            title="Get Demo"
            size="large"
          />
        }
        media={
          <ImageView
            src={"/features/studio-hero.png"}
            width={1020}
            height={480}
            quality={100}
            priority
            alt="Samespace Studio"
          />
        }
      />

      <Section
        headline={["Cutting Edge Customer Experience with Smart IVR"]}
        showMediaFirst
        copy={[
          "IVRs are a crucial part of the customer experience. Samespace Studio gives you a powerful platform to build dynamic IVRs that respond intelligently to customer inputs using AI and flexible APIs.",
        ]}
        media={
          <ImageView
            src={"/features/ivr.png"}
            width={520}
            height={520}
            quality={100}
            alt="Multilevel IVRs with Studio"
          />
        }
      />
      <Section
        backgroundClass="bg-gray-50"
        headline={["One Space.", " So Many Channels."]}
        copy={[
          "Samespace Studio allows you to create more meaningful customer interactions on the platforms they use most frequently.",
        ]}
        media={
          <ImageView
            src={"/features/omnichannel-flow.png"}
            width={520}
            height={520}
            quality={100}
            alt="Omnichannel IVRs with Studio"
          />
        }
      />
      <Section
        headline={["Detailed Insights"]}
        showMediaFirst
        copy={[
          "Get detailed insights by simply looking into step by step customer journey.",
        ]}
        media={
          <ImageView
            src={"/features/studio-analytics.png"}
            width={520}
            height={520}
            quality={100}
            alt="Studio Analytics"
          />
        }
      />
      <Section
        backgroundClass="bg-gray-50"
        headline={[
          <>
            <span>The Platform Developers, </span>
            <span> Love Too</span>
          </>,
        ]}
        copy={[
          "Extend Studio functionality with advanced business logic using custom functions and webhooks.",
        ]}
        media={
          <ImageView
            src={"/features/studio-for-developers.png"}
            width={520}
            height={520}
            quality={100}
            alt="Studio Analytics"
          />
        }
      />

      <Testimonial
        quote="Studio is an amazing feature that allows us to build the IVR on the fly."
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
            alt="Mukhtadir Syed"
          />
        }
      />
      <Banner bannerAction={() => toggleDemoForm("Get Demo")} />
    </>
  );
}
