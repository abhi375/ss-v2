import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function SalesCRM({ toggleDemoForm }) {
  return (
    <>
      <Section
        hero
        headline={["The Missing Piece of Your Salesforce Puzzle"]}
        copy={[
          "Our Salesforce-native integration streamlines your support team’s productivity by automating call flows like never before, saving them time and empowering them to work smarter.",
        ]}
        callToActions={
          <Button onClick={toggleDemoForm} title="Get a demo" size="large" />
        }
        media={
          <Image
            src="/features/sf-dialer-hero.png"
            alt="Native Salesforce App"
            width={500}
            priority
            height={500}
            quality={100}
          />
        }
      />
      <LogoWall />
      <Section
        showMediaFirst
        headline={["Add Intelligence to the Call Even Before It’s Answered"]}
        copy={[
          "Provide personalized customer service by automatically fetching data from any Salesforce object, and use it to dynamically route the conversation to the best available agent.",
        ]}
        media={
          <Image
            src="/features/dynamic-routing-flow.png"
            alt="Native Salesforce App"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Section
        headline={["Instant Information"]}
        copy={[
          "Samespace's native CTI provides reps with rich contextual data that helps them serve faster. Calls trigger a screenpop that provides data about prospects including past calls, notes, conversation info and key insights.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            src="/features/ai-enhanced-sf-dialer.png"
            alt="Native Salesforce App"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Section
        headline={["The Next Evolution in Omnichannel Experiences"]}
        copy={[
          "Allow customers to connect with you on their channel of choice, and curate the best possible experience for that individual, every time.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/omnichannel.png"
            alt="Native Salesforce App"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Section
        headline={["Put AI to Work"]}
        copy={[
          "60% of your tier-1 customer queries can be handled by Samespace AI bots, freeing up your live agents for more valuable conversations.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            src="/features/ai-workload.png"
            alt="Native Salesforce App"
            width={500}
            height={500}
            quality={100}
          />
        }
      />
      <Section
        headline={["Ditch the Time", " Wasting Tasks"]}
        copy={[
          "Let your agents focus on what’s important: talking to more prospects. Let Samespace handle the rest.",
        ]}
        showMediaFirst
        media={
          <Image
            src="/features/sf-call-logging.png"
            alt="Native Salesforce App"
            width={880}
            height={640}
            quality={100}
          />
        }
      />
      <Section
        headline={["Customer Feedback", " from Every Call"]}
        copy={[
          "Know for certain what your customers are thinking with a CSAT survey that collects feedback as soon an agent hangs up.",
        ]}
        backgroundClass="bg-gray-50"
        media={
          <Image
            src="/features/csat.png"
            alt="Native Salesforce App"
            width={640}
            height={400}
            quality={100}
          />
        }
      />
      <Section
        showMediaFirst
        headline={["Stay in Sync with", "  Your Customers"]}
        copy={[
          "Access crucial data on what your customers are saying during calls, including feedback on your product, as well as mentions of competitors, so you can implement changes to make improvements across the board.",
        ]}
        media={
          <Image
            src="/features/ai-enhanced-sf-dialer.png"
            alt="Native Salesforce App"
            width={500}
            height={500}
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
            width="64px"
            height="64px"
            objectFit="cover"
            className="rounded-full overflow-hidden"
            alt="Mukhtadir Syed"
          />
        }
      />
      <Banner
        bannerAction={toggleDemoForm}
        title="See our native Salesforce CTI in Action."
      />
    </>
  );
}
