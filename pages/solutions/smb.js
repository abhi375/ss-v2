import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function SMBPage({ toggleDemoForm }) {
  return (
    <>
      <Section
        hero
        headline={["Scale and Grow with Enterprise-Grade Tools"]}
        copy={[
          "You’re focusing your cash and attention on growth. We get it. We’ve been there too. See how Samespace gives you cutting edge Contact Center tech for less.",
        ]}
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
      />
      <Section
        headline={["Faster Deployment by Design"]}
        showMediaFirst
        copy={[
          "Growing businesses need to move fast, but software deployments can be slow, complex, and costly. Samespace is just different.",
          "With intuitive drag & drop conversation flows via our Conversation Studio. We’re simply easier to deploy and use, with expertly crafted tech.",
        ]}
      />
      <Section
        headline={["Advanced Analytics Included"]}
        copy={[
          "Many small to midsize companies don’t have a company-wide BI solution. With Samespace, you get a beautiful tool to visualize data from any source that provides insights essential to your growing business, and for no additional cost.",
        ]}
      />
      <Section
        headline={["24x7 Real-Time Support"]}
        showMediaFirst
        copy={[
          "Our global support team means we’re on the same schedule as your Contact Centers, no matter where, or when, they are.",
        ]}
      />
      <Section
        headline={["Continuous Innovation"]}
        copy={[
          "You’re growing and so are we. We’re constantly innovating to develop new tools to meet your needs, now and in the future",
        ]}
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
