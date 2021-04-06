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
        headline={["The Full Force of Salesforce"]}
        copy={[
          "Take your Salesforce to the next level with our native CTI and automation.",
        ]}
        callToActions={
          <div className="">
            <Link href="/solutions/salesforce/sales">
              <a className="text-lg px-9 py-3 rounded-full bg-accent text-white rounded-full mr-6">
                For Sales
              </a>
            </Link>
            <Link href="/solutions/salesforce/service">
              <a className="text-lg px-9 py-3 rounded-full text-accent border border-solid border-accent rounded-full">
                For Service
              </a>
            </Link>
          </div>
        }
      />
      <LogoWall />
      <Section
        headline={["2x the Calls"]}
        copy={[
          "Double your productivity by allowing teams to handle twice as many calls while automatically logging call activity.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["Deeper Insights with AI"]}
        copy={[
          "Access crucial data on what your customers are saying during calls including feedback on your product, as well as mentions of competitors, so you can implement changes to make improvements across the board.",
        ]}
      />
      <Section
        showMediaFirst
        headline={["Raise Your Call IQ"]}
        copy={[
          "The smart solution to your prospect call flow. Leverage intelligent routing to make sure the right agent gets the call every time.",
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

      <Banner title="Get the most out of Salesforce." />
    </>
  );
}
