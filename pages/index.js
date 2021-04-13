import Banner from "@/components/Banner";
import Button from "@/components/Button";
import FeatureTeaser from "@/components/FeatureTeaser";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import ReactPlayer from "react-player";

export default function Home({ toggleDemoForm }) {
  return (
    <>
      <section className="px-6 md:px-12 py-16 md:py-32 overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black w-full md:w-5/6 mx-auto">
              <span className="block">Cloud Contact Center Software.</span>
              <span>
                {" "}
                Centered on{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-accent to-indigo-600">
                  Experience.
                </span>
              </span>
            </h1>
            <p className="max-w-[720px] mx-auto text-2xl leading-normal my-8">
              Built on cutting-edge Internet technologies and design thinking
              principles, samespace elates customer experience, increases agent
              productivity and saves a ton of money.
            </p>

            <Button
              size="large"
              backgroundClass="bg-accent"
              foregroundClass="text-white"
              title="Get Demo"
              onClick={() => toggleDemoForm("Get Demo")}
            />
          </div>
        </div>
      </section>

      <LogoWall />
      <Section
        columns="one"
        textAlignment="center"
        headline={[
          <>
            <span className="block">Complexity now a </span>
            <span className="text-blue-600">thing of the past.</span>
          </>,
        ]}
        copy={[
          "Samespace lets you create, route, and deploy voice, chat and messaging flows in minutes. Whether for customer support or sales, simply drag and drop, no coding needed.",
        ]}
        media={
          <div className="max-w-screen-lg mx-auto mt-12">
            <div className="rounded-sm md:rounded-xl overflow-hidden shadow-subtle">
              <FeatureTeaser
                teaser={"/videos/drag-and-drop.mp4"}
                hideReplayButton
              />
            </div>
          </div>
        }
      />
      <Section
        headline={[
          <>
            <span>
              <span className="text-indigo-600">Scale your sales</span> without
            </span>
            <span className="inline md:block"> scaling teams.</span>
          </>,
        ]}
        columns="two"
        backgroundClass="bg-gray-50"
        showMediaFirst
        copy={[
          "By automatically logging call activity, increase the number of connected calls by 100% and your sales team's productivity by 50% with our smart automation capability.",
        ]}
        media={
          <Image
            src="/features/playbooks.png"
            alt="Samespace Playbooks"
            width={540}
            height={540}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          <>
            <span>Plug it and</span>
            <span className="inline md:block text-indigo-600">
              {" "}
              let your CRM play.
            </span>
          </>,
        ]}
        verticalPadding="py-16 lg:py-12"
        columns="two"
        copy={[
          "Samespace offers ready to run native CTI integration with popular CRMs, and open APIs for custom integrations.",
        ]}
        media={
          <Image
            src="/features/crm-connections.png"
            alt="Samespace Integrations"
            width={540}
            height={540}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          <>
            <span className="inline md:block">
              <span className="text-green-600">AI that speaks</span>
            </span>
            <span> your language.</span>
          </>,
        ]}
        columns="two"
        showMediaFirst
        backgroundClass="bg-gray-50"
        copy={[
          "Built from the ground up, Samespace Conversational AI provides customizable and adaptable AI Bots with built-in sentiment analysis.",
        ]}
        media={
          <Image
            src="/features/sentiment-analysis.png"
            alt="Samespace Sentiment Analysis"
            width={540}
            height={540}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          <>
            <span className="text-rose-600 block sm:inline">Your Data,</span>
            <span> your way.</span>
          </>,
        ]}
        columns="two"
        copy={[
          "Customize dashboards with drag and drop widgets and create granular reports by applying advanced filters. Bring your own data to see the bigger picture in one place.",
        ]}
        media={
          <Image
            src="/features/cc-analytics.png"
            alt="Samespace Analytics"
            width={540}
            height={540}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          <>
            <span>Set the bar higher</span>
            <span className="block ">
              with
              <span className="text-blue-600"> HiFi.</span>
            </span>
          </>,
        ]}
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
            width={540}
            height={406}
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
      <Banner bannerAction={() => toggleDemoForm("Get Demo")} />
    </>
  );
}
