import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function VoiceCloudPage({ toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Voice Cloud - Samespace" />
      <Section
        hero
        columns="one"
        verticalPadding="py-16 lg:py-28"
        textAlignment="center"
        headline={["A Global VoIP Powerhouse. ", "15 Years in the Making"]}
        copy={[
          "We’ve spent 15 years perfecting our VoIP technology and building one of the world’s most reliable telephony networks, which handles over 10 million calls per day.",
        ]}
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
      />

      <LogoWall />

      <Section
        headline={["Keeping the World Connected"]}
        copy={[
          "Our customers stay connected to their customers and prospects, wherever in the world they may be, by gaining access to phone numbers in 100+ countries. We also support outbound calls to almost every functional number on the planet—local, national and toll-free in 100+ countries, regardless of carrier.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/connected-world-via-samespace.png"
            width={520}
            height={520}
            quality={100}
            alt="Global Connectivity with Samespace"
          />
        }
      />

      <Section
        headline={["100% Uptime,", " 100% of the Time"]}
        backgroundClass="bg-gray-50"
        copy={[
          "Our multi-region cloud has no single point of failure, so your calls always go through, even when a data center faces an outage.",
        ]}
        media={
          <Image
            src="/features/sla.png"
            width={480}
            height={480}
            quality={100}
            alt="Samespace SLA"
          />
        }
      />

      <Section
        headline={["Max Capacity"]}
        showMediaFirst
        copy={[
          "There is no practical limit on concurrent calls. Our VoIP network is designed to support dialer traffic that most SIP trunking providers can’t handle.",
        ]}
        media={
          <Image
            src="/features/voicecloud-capacity.png"
            width={480}
            height={480}
            quality={100}
            alt="Max Capacity"
          />
        }
      />

      <Section
        headline={["Optimized for Online"]}
        backgroundClass="bg-gray-50"
        copy={[
          "Our routing algorithm dynamically selects the ideal path to cope with latency and packet drops for a singularly crisp and jitter-free call experience.",
        ]}
        media={
          <Image
            src="/features/optimized-voip.png"
            width={480}
            height={480}
            quality={100}
            alt="Max Capacity"
          />
        }
      />

      <Testimonial
        quote="About the entire experience with Samespace, one word comes to my mind: Excellent."
        personName="Urooj"
        personDesignation="IT Head at Avis"
        companyLogo={
          <Image
            src="/logos/avis.svg"
            width="200px"
            height="32px"
            alt="Endurance Logo"
          />
        }
      />
      <Banner bannerAction={toggleDemoForm} />
    </>
  );
}
