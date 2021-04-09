import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function StudioPage({ toggleDemoForm }) {
  return (
    <>
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
        backgroundClass="bg-accent bg-opacity-5"
        textAlignment="center"
        columns="one"
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
        media={
          <Image
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
        headline={["Cutting Edge Customer Experience with IVR"]}
        showMediaFirst
        copy={[
          "IVRs are a crucial part of the customer experience. Samespace Studio gives you a powerful platform to build dynamic IVRs that respond intelligently to customer inputs using AI and flexible APIs.",
        ]}
        media={
          <Image
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
        headline={["One Studio:", "So. Many. Channels"]}
        copy={[
          "Samespace Studio allows you to create more meaningful customer interactions on the platforms they use most frequently.",
        ]}
        media={
          <Image
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
          <Image
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
        headline={["The Platform Developers", "  Love Too"]}
        copy={[
          "Extend Studio functionality with advanced business logic using custom functions and webhooks.",
        ]}
        media={
          <Image
            src={"/features/studio-for-developers.png"}
            width={520}
            height={520}
            quality={100}
            alt="Studio Analytics"
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
      <Banner bannerAction={toggleDemoForm} />
    </>
  );
}
