import Banner from "@/components/Banner";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";

export default function CRMIntegrationPage({ toggleDemoForm }) {
  return (
    <>
      <Section
        hero
        headline={["Supercharge Your Sales and Support Teams"]}
        copy={[
          "Our HubSpot Integration enables your entire team to streamline their call workflows, increase productivity, and track customers through the whole customer journey: from marketing to sales and success.",
        ]}
        callToActions={
          <div className="">
            <Link href="/solutions/hubspot/sales">
              <a className="text-lg px-9 py-3 rounded-full bg-accent text-white rounded-full mr-6">
                For Sales
              </a>
            </Link>
            <Link href="/solutions/hubspot/service">
              <a className="text-lg px-9 py-3 rounded-full text-accent border border-solid border-accent rounded-full">
                For Service
              </a>
            </Link>
          </div>
        }
      />
      <LogoWall />
      <Section
        headline={[
          "Connect Prospects to the Right Reps the First Time. Every Time.",
        ]}
        copy={[
          "Our dynamic routing directs inbound leads based on anything you know about the caller, including lead source, campaign, past interaction history, and more.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["Ditch the time wasting tasks."]}
        copy={[
          "Let your agents focus on what’s important: talking to more prospects. Let Samespace handle the rest.",
        ]}
      />
      <Section
        showMediaFirst
        headline={["Get Your Reps the Help They Need When They Need It."]}
        copy={[
          "Be there for your reps when it counts in real time using our visibility features. And with call recordings saved and stored automatically in your CRM, you can use crucial learning tools to keep your team’s skill set sharp.",
        ]}
      />
      <Section
        headline={["See What an AI Enhanced Sales Team Can Do"]}
        copy={[
          "Our AI powered insights use Speech Recognition to transcribe calls. Our APIs enable you to collate multiple data points into one single source, so your call flow gets smarter, faster.",
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

      <Banner
        bannerAction={toggleDemoForm}
        title="Take Hubspot to a higher level with Samespace."
      />
    </>
  );
}
