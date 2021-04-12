import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home({ toggleDemoForm }) {
  return (
    <>
      <section className="px-6 md:px-12 py-24 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center ">
          <div className="grid grid-cols-1 gap-8 w-full lg:w-5/12">
            <h1 className="hidden xl:block text-5xl font-black">
              Cloud Contact Center Software—Centered on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#0A2FB4] to-accent">
                Experience.
              </span>
            </h1>
            <h1 className="block xl:hidden text-4xl font-black">
              Cloud Contact Center Software. Centered on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#0A2FB4] to-accent">
                Experience.
              </span>
            </h1>
            <p className="text-xl leading-normal">
              Built on cutting-edge technologies and design thinking principles,
              samespace bring together everything that's required to build an
              exceptional Contact Center experience.
            </p>
            <div className="">
              <Button
                size="large"
                title="Get a demo"
                onClick={toggleDemoForm}
              />
            </div>
          </div>
          <div className="w-full lg:w-7/12 hidden sm:block relative mt-8 lg:mt-0">
            <motion.div
              style={{
                width: 360,
                height: 550,
                position: "absolute",
                zIndex: 1,
              }}
              className="left-12 -bottom-16 sm:-bottom-8 sm:left-40"
            >
              <Image
                src="/features/dock-hero.png"
                alt="Samespace Analytics"
                layout="fill"
                quality={100}
                priority
                className=""
              />
            </motion.div>
            <div
              style={{
                width: 960,
                height: 580,
                position: "relative",
              }}
              className="right-0 lg:-right-24"
            >
              <Image
                src="/features/ss-analytics.png"
                alt="Samespace Analytics"
                width={960}
                height={580}
                quality={100}
                priority
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <LogoWall />
      <Section
        headline={[
          <>
            <span>Complexity now a </span>

            <span className="inline md:block bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              thing of the past.
            </span>
          </>,
        ]}
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
        headline={[
          <>
            <span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-600">
                Scale your sales
              </span>{" "}
              without
            </span>
            <span className="inline md:block"> scaling teams.</span>
          </>,
        ]}
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
        headline={[
          <>
            <span>Plug it and</span>
            <span className="inline md:block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-600">
              {" "}
              let your CRM play.
            </span>
          </>,
        ]}
        columns="two"
        copy={[
          "Samespace offers ready to run native CTI integration with popular CRMs, and open APIs for custom integrations.",
        ]}
        media={
          <Image
            src="/features/crm-galaxy.png"
            alt="Samespace Integrations"
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          <>
            <span className="inline md:block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                AI
              </span>{" "}
              that speaks
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
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          <>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
              Your Data,
            </span>
            <span> your way.</span>
          </>,
        ]}
        columns="two"
        copy={[
          "Customize dashboards with drag and drop widgets and create granular reports by applying advanced filters. Bring your own data to see the big picture in one place.",
        ]}
        media={
          <Image
            src="/features/cc-analytics.png"
            alt="Samespace Analytics"
            width={520}
            height={520}
            quality={100}
          />
        }
      />
      <Section
        headline={[
          <>
            <span>Set the bar higher</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0A2FB4] to-accent">
              {" "}
              with HiFi.
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
