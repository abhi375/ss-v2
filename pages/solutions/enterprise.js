import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function EnterprisePage({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Enterprise - Samespace" />
      <Section
        hero
        backgroundClass="bg-gray-50"
        headline={[
          "A Fully Stocked Contact Center Platform Docked Right in Your CRM",
        ]}
        copy={[
          "Imagine a solution without gluing multiple systems. Samespace offers a comprehensive platform right in your CRM, so everything you need is always within reach.",
        ]}
        columns={"one"}
        textAlignment="center"
        callToActions={
          <Button size="large" onClick={toggleDemoForm} title="Get a demo" />
        }
        media={
          <div className="hidden sm:block">
            <Image
              src={"/features/crm-stack.png"}
              alt="Samespace Integration"
              width={1200}
              height={280}
              priority
              quality={100}
            />
          </div>
        }
      />

      <Section
        headline={["Enterprise-grade security", " reliability, and compliance"]}
        showMediaFirst
        copy={[
          "With Samespace, you’re getting application security at the highest level, and we know you’d accept no less. GDPR and SOC 2 compliance is a given. We provide an on-premises option for compliance and data sovereignty, and our resilient data centers allow for maximum uptime.",
        ]}
        media={
          <Image
            src={"/features/complience.png"}
            alt="Samespace Integration"
            width={480}
            height={480}
            quality={100}
          />
        }
      />

      <Section
        headline={["24x7 Real-Time Support"]}
        copy={[
          "Our global support team means we’re on the same schedule as your Contact Centers, no matter where, or when, they are.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            src={"/features/ss-support.png"}
            alt="Samespace Integration"
            width={480}
            height={480}
            quality={100}
          />
        }
      />
      <Section
        headline={["Easier to Integrate,", " Faster to Deploy"]}
        copy={[
          "We have no out-dated legacy architecture, our tech stack was designed to provide rapid integration, and our Conversation Studio makes flows easier to build than anyone else on the market.",
        ]}
        media={
          <Image
            src={"/features/crm-integrations.png"}
            alt="Samespace Integration"
            width={480}
            height={480}
            quality={100}
          />
        }
        showMediaFirst
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
