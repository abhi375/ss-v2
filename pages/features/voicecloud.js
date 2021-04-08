import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function VoiceCloudPage({ toggleDemoForm }) {
  return (
    <>
      <Section
        hero
        headline={["A Global VoIP Powerhouse - 15 Years in the Making"]}
        copy={[
          "We’ve spent 15 years perfecting our VoIP technology and building one of the world’s most reliable telephony networks, which handles over 10 million calls per day.",
        ]}
        callToActions={<Button title="Get a demo" size="large" />}
      />

      <Section
        headline={["Keeping the World Connected"]}
        copy={[
          "Our customers stay connected to their customers and prospects, wherever in the world they may be, by gaining access to phone numbers in 100+ countries. We also support outbound calls to almost every functional number on the planet—local, national and toll-free in 100+ countries, regardless of carrier.",
        ]}
        showMediaFirst
      />

      <Section
        headline={["100% Uptime,", "100% of the Time"]}
        copy={[
          "Our multi-region cloud has no single point of failure, so your calls always go through, even when a data center faces an outage.",
        ]}
      />

      <Section
        headline={["Max Capacity"]}
        showMediaFirst
        copy={[
          "There is no practical limit on concurrent calls. Our VoIP network is designed to support dialer traffic that most SIP trunking providers can’t handle.",
        ]}
      />

      <Section
        headline={["Optimized for Online"]}
        copy={[
          "Our routing algorithm dynamically selects the ideal path to cope with latency and packet drops for a singularly crisp and jitter-free call experience.",
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
