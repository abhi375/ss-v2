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
        headline={["Drag. Drop. Done."]}
        copy={[
          "Our Conversation Studio is uniquely intuitive and easy to use, reducing training and deployment times to an absolute minimum.",
        ]}
        media={
          <div className="w-4/5 mx-auto relative pt-[40%] mt-8">
            <div className="bg-gray-100 absolute inset-0"></div>
          </div>
        }
        backgroundClass="bg-gray-50"
        textAlignment="center"
        columns="one"
        callToActions={<Button title="Get a demo" size="large" />}
      />

      <Section
        headline={["Cutting Edge Customer Experience with IVR"]}
        showMediaFirst
        copy={[
          "IVRs are a crucial part of the customer experience. Samespace Studio gives you a powerful platform to build dynamic IVRs that respond intelligently to customer inputs using AI and flexible APIs.",
        ]}
      />
      <Section
        headline={["One Studio:", "So. Many. Channels"]}
        copy={[
          "Samespace Studio allows you to create more meaningful customer interactions on the platforms they use most frequently.",
        ]}
      />
      <Section
        headline={["Detailed Insights"]}
        showMediaFirst
        copy={[
          "Get detailed insights by simply looking into step by step customer journey.",
        ]}
      />
      <Section
        headline={["The Platform Developers Love Too"]}
        copy={[
          "Extend Studio functionality with advanced business logic using custom functions and webhooks.",
        ]}
      />

      <Testimonial
        quote="The first thing that differentiated Samespace was they matched solutions to our complex needs. Delivery team ensured our needs were met, and now our sales & service teams have a solid CTI solution."
        personName="Mukhtadir Syed"
        personDesignation="AVP - Sales and Customer Success"
        companyLogo={
          <Image src="/logos/endurance.svg" width="200px" height="56px" />
        }
        personAvatar={
          <Image
            src="/people/mukhtadir.jpeg"
            width="64px"
            height="64px"
            objectFit="cover"
            className="rounded-full overflow-hidden"
          />
        }
      />
      <Banner bannerAction={toggleDemoForm} />
    </>
  );
}
