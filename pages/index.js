import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home({ toggleDemoForm }) {
  return (
    <>
      <Section
        headline={["Cloud Contact Center software—centered on experience."]}
        columns="one"
        textAlignment="center"
        verticalPadding="py-16 md:py-24 "
        copy={[
          "Built on cutting-edge Internet technologies and design thinking principles, samespace elates customer experience, increases agent productivity and saves a ton of money.",
        ]}
        callToActions={
          <div className="">
            <Button size="large" title="Get a demo" onClick={toggleDemoForm} />
          </div>
        }
      />
      <LogoWall />
      <Section
        headline={["Complexity now a thing", " of the past."]}
        columns="two"
        copy={[
          "Samespace lets you create, route, and deploy voice, chat and messaging flows in minutes. Whether for customer support or sales, simply drag and drop, no coding needed.",
        ]}
        media={
          <Image
            src="/features/studio-flow.png"
            alt="Samespace Studio"
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={["Scale your sales without scaling teams."]}
        columns="two"
        backgroundClass="bg-gray-50"
        showMediaFirst
        copy={[
          "Our smart automation increases the number of connected calls by 100% and makes sales teams 50% more productive by automatically logging activity.",
        ]}
        media={
          <Image
            src="/features/playbooks.png"
            alt="Samespace Playbooks"
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={["Plug it and let your", " CRM play."]}
        columns="two"
        copy={[
          "Samespace offers ready to run native CTI integration with popular CRMs, and open APIs for custom integrations.",
        ]}
        media={
          <Image
            src="/features/crm-integrations.png"
            alt="Samespace Playbooks"
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={["AI that speaks", " your language."]}
        columns="two"
        showMediaFirst
        backgroundClass="bg-gray-50"
        copy={[
          "Built from the ground up, Samespace Conversational AI provides customizable and adaptable AI Bots with built-in sentiment analysis.",
        ]}
        media={
          <Image
            src="/features/sentiment-analysis.png"
            alt="Samespace Playbooks"
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={["Your data, your way."]}
        columns="two"
        copy={[
          "Customize dashboards with drag and drop widgets and create granular reports by applying advanced filters. Bring your own data to see the big picture in one place.",
        ]}
        media={
          <Image
            src="/features/cc-analytics.png"
            alt="Samespace Playbooks"
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={["Set the bar higher", " with HiFi."]}
        columns="two"
        showMediaFirst
        backgroundClass="bg-gray-50"
        copy={[
          "Embed high fidelity calls into your web with built-in authentication and fastlane routing.",
        ]}
        media={
          <Image
            src="/features/hifi.png"
            alt="Samespace HiFi"
            width={578}
            height={420}
            quality={100}
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
            alt="Mukhtadir Syed"
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
