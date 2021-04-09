import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";

export default function CRMIntegrationPage() {
  return (
    <>
      <Section
        hero
        headline={["The Final Piece of Your", "CRM Puzzle"]}
        copy={[
          "Your CRM isn’t complete without Samespace. We seamlessly integrate into any CRM to make your contact center agile and adaptable, expertly enhancing all of your calls.",
        ]}
        callToActions={
          <div className="">
            <Link href="/solutions/crm-integrations/sales">
              <a className="text-lg px-9 py-3 rounded-full bg-accent text-white mr-6 hover:shadow-inset">
                For Sales
              </a>
            </Link>
            <Link href="/solutions/crm-integrations/service">
              <a className="text-lg px-9 py-3 rounded-full text-accent border border-solid border-accent hover:text-white hover:bg-accent">
                For Service
              </a>
            </Link>
          </div>
        }
        media={
          <Image
            width={520}
            height={520}
            priority
            quality={100}
            src={"/features/crm-galaxy.png"}
            alt="Samespace Platform Components"
          />
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
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/dynamic-routing-flow.png"}
            alt="Samespace Platform Components"
          />
        }
      />
      <Section
        headline={["Ditch the Time", " Wasting Tasks"]}
        copy={[
          "Let your agents focus on what’s important: talking to more prospects. Let Samespace handle the rest.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/notes-on-chrome-dock.png"}
            alt="Samespace Call Logging"
          />
        }
      />
      <Section
        showMediaFirst
        headline={[
          "Get Your Reps",
          " the Help They Need",
          " When They Need It.",
        ]}
        copy={[
          "Be there for your reps when it counts in real time using our visibility features. And with call recordings saved and stored automatically in your CRM, you can use crucial learning tools to keep your team’s skill set sharp.",
        ]}
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/live-monitoring-and-coaching.png"}
            alt="Live monitoring and coaching"
          />
        }
      />

      <Section
        headline={["See What an AI Enhanced Sales Team Can Do"]}
        copy={[
          "Samespace’s AI powered insights use Speech Recognition to transcribe calls. Our APIs enable you to collate multiple data points into one single source, so your call flow gets smarter, faster.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/sentiment-analysis.png"}
            alt="Sentiment Analysis"
          />
        }
      />

      <Section
        showMediaFirst
        headline={["Customize Your Conversations"]}
        copy={[
          "What used to take weeks with developers now takes minutes thanks to our easy and intuitive Conversation Studio.",
        ]}
        media={
          <Image
            width={520}
            height={520}
            quality={100}
            src={"/features/studio-flow.png"}
            alt="Samespace Studio"
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

      <Banner title="Enhance your CRM, double your productivity." />
    </>
  );
}
