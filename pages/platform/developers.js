import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Image from "next/image";

export default function DevelopersPage({ toggleDemoForm }) {
  const openDeveloperDocs = () => {
    window.open("https://support.samespace.com/voice-api/", "_blank");
  };

  return (
    <>
      <Section
        verticalPadding="py-20 lg:py-24"
        foregroundClass="text-white"
        backgroundClass="bg-gradient-to-r from-[#0A2FB4] to-[#120078]"
        headline={["Advanced", " Communication APIs"]}
        copy={[
          "You don’t need to be an expert to build and integrate custom apps with Samespace. We make it easy and accessible to every user.",
        ]}
        callToActions={
          <Button
            onClick={openDeveloperDocs}
            title="Explore the docs"
            size="large"
            foregroundClass="text-[#120078]"
            backgroundClass="bg-white"
          />
        }
        media={
          <Image
            src="/features/devtools-hero.png"
            width={650}
            height={500}
            quality={100}
            priority
            alt="Samespace APIs"
          />
        }
      />
      <LogoWall />
      <section className="px-12 py-20">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 gap-10 lg:gap-0">
          <div className="text-center  lg:p-20 lg:border-r lg:border-b border-solid border-gray-200">
            <Image
              src="/features/rest-api.png"
              width={88}
              height={88}
              quality={100}
              alt="Rest APIs"
            />
            <p className="text-3xl lg:text-2xl font-bold">Rest API</p>
            <p className="text-xl lg:text-lg opacity-70 mt-2 leading-normal">
              Use REST APIs to route, initiate, bridge, record, and control
              calls.
            </p>
          </div>
          <div className="text-center lg:p-20 lg:border-b border-solid border-gray-200">
            <Image
              src="/features/global-voice-network.png"
              width={88}
              height={88}
              quality={100}
              alt="Rest APIs"
            />
            <p className="text-3xl lg:text-2xl font-bold">
              Global Voice Network
            </p>
            <p className="text-xl lg:text-lg opacity-70 mt-2 leading-normal">
              Integrate a high-quality global voice network to call anywhere in
              the world.
            </p>
          </div>
          <div className="text-center lg:p-20 lg:border-r border-solid border-gray-200">
            <Image
              src="/features/phone-number-api.png"
              width={88}
              height={88}
              quality={100}
              alt="Rest APIs"
            />
            <p className="text-3xl lg:text-2xl font-bold">Phone Numbers</p>
            <p className="text-xl lg:text-lg opacity-70 mt-2 leading-normal">
              Get Local and Toll-Free phone numbers in 100+ countries with
              Samespace.
            </p>
          </div>
          <div className="text-center lg:p-20">
            <Image
              src="/features/sip.png"
              width={88}
              height={88}
              quality={100}
              alt="Rest APIs"
            />
            <p className="text-3xl lg:text-2xl font-bold">SIP</p>
            <p className="text-xl lg:text-lg opacity-70 mt-2 leading-normal">
              Connect your existing communication infrastructure via SIP
              Network.
            </p>
          </div>
        </div>
      </section>

      <Section
        backgroundClass="bg-gray-50"
        headline={["Speech Recognition"]}
        copy={[
          "Get real-time speech and intent recognition and offer more personalized and intuitive customer care.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/speech-recognition.png"
            width={500}
            height={500}
            quality={100}
            alt="Speech Recognition"
          />
        }
      />

      <Section
        headline={["Text-to-Speech"]}
        copy={[
          " Speak text in multiple languages and accents to provide answers to your customers in a familiar way.",
        ]}
        media={
          <Image
            src="/features/text-to-speech.png"
            width={500}
            height={500}
            quality={100}
            alt="Text to Speech"
          />
        }
      />

      <Section
        headline={["Chat SDK"]}
        backgroundClass="bg-gray-50"
        copy={[
          "Integrate the Samespace chat widget on your website and mobile apps.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/chat-sdk.png"
            width={500}
            height={500}
            quality={100}
            alt="Chat SDK"
          />
        }
      />

      <Section
        headline={["Text and email"]}
        copy={[
          "Create two-way communication, authenticate callers, and send text & email notifications.",
        ]}
        media={
          <Image
            src="/features/nottifications.png"
            width={500}
            height={500}
            quality={100}
            alt="Email and SMS"
          />
        }
      />

      <Section
        headline={["Serverless Apps"]}
        backgroundClass="bg-gray-50"
        copy={[
          "Build and deploy your codes right within Samespace, without need for additional resources and hosting.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/serverless.png"
            width={500}
            height={500}
            quality={100}
            alt="Chat SDK"
          />
        }
      />

      <Banner
        title="See why developers love us."
        bannerAction={toggleDemoForm}
      />
    </>
  );
}
