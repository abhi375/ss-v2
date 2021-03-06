import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";

export default function DevelopersPage({ toggleDemoForm }) {
  const openDeveloperDocs = () => {
    window.open("https://support.samespace.com/voice-api/", "_blank");
  };

  return (
    <>
      <NextSeo title="Developers - Samespace" />
      <Section
        hero
        verticalPadding={"py-20 lg:py-20"}
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
          <ImageView
            src="/features/devtools-hero.png"
            width={450}
            height={400}
            quality={100}
            priority
            alt="Samespace APIs"
          />
        }
      />

      <Section
        headline={["Speech Recognition"]}
        copy={[
          "Get real-time speech and intent recognition and offer more personalized and intuitive customer care.",
        ]}
        showMediaFirst
        media={
          <ImageView
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
        backgroundClass="bg-gray-50"
        copy={[
          " Speak text in multiple languages and accents to provide answers to your customers in a familiar way.",
        ]}
        media={
          <ImageView
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
        copy={[
          "Integrate the Samespace chat widget on your website and mobile apps.",
        ]}
        showMediaFirst
        media={
          <ImageView
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
        backgroundClass="bg-gray-50"
        copy={[
          "Create two-way communication, authenticate callers, and send text & email notifications.",
        ]}
        media={
          <ImageView
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
        copy={[
          "Build and deploy your codes right within Samespace, without need for additional resources and hosting.",
        ]}
        showMediaFirst
        media={
          <ImageView
            src="/features/serverless.png"
            width={500}
            height={500}
            quality={100}
            alt="Chat SDK"
          />
        }
      />

      <LogoWall />

      <Banner
        title="See why developers love us."
        bannerAction={() => toggleDemoForm("Get Demo")}
      />
    </>
  );
}
