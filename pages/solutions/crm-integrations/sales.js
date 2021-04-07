import Banner from "@/components/Banner";
import Button from "@/components/Button";
import LogoWall from "@/components/LogoWall";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function SalesCRM() {
  return (
    <>
      <Section
        hero
        headline={["Supercharged Sales"]}
        copy={[
          "Give your CRM the enhancement it needs to make your sales reps super productive. They’ll take and make more calls per day effortlessly thanks to our automated features and their streamlined workflows, and at the end of the day, that means more revenue for you",
        ]}
        callToActions={<Button title="Get a demo" size="large" />}
      />
      <LogoWall />
      <Section
        headline={["No More Manual Entry"]}
        copy={[
          "With Samespace, your reps don’t have to click around for data before a call, nor enter it afterwards. Everything’s automated, letting the calls flow fluidly all day long.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["Live Monitoring and Coaching"]}
        copy={[
          "Be there for your reps when it counts in real time using our easy on the eyes visibility features. You’ll see what each rep is up to so you can monitor their activity and support your team when needed.",
          "With call recordings saved and stored automatically in your CRM, you can use crucial learning tools to keep your team’s skill set sharp.",
        ]}
      />
      <Section
        headline={["Putting Data into Action"]}
        copy={[
          "With Samespace, data is always working for you. Our suped up API enables you to collate multiple data sources into one single set, so you can turn data into plans and plans into action concerning team productivity, customer trends, and more.",
        ]}
        showMediaFirst
      />
      <Section
        headline={["See what an AI enhanced sales team can do."]}
        copy={[
          "Samespace’s AI powered insights use Speech Recognition to transcribe calls automatically log them into Salesforce. Our suped up API enables you to collate multiple data sources into one single set, so you can turn data into plans and plans into action concerning team productivity, customer trends, and more.",
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
      <Banner />
    </>
  );
}