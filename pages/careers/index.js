import { ChevronRightIcon } from "@/components/Icons";
import { getAllPosts } from "@/lib/api";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";
import Link from "next/link";

export default function CareersPage({ jobs }) {
  return (
    <>
      <NextSeo title="Careers - Samespace" />
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full md:w-4/6 mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              We’re from Everywhere
            </h1>
            <p className="text-xl leading-normal mb-8">
              We searched the entire world - literally - to assemble our team.
              With global headquarters and a global workforce, we’re positioned
              perfectly to adapt to the constantly shifting state of things in
              particular places. By working here, your career is built for the
              long haul, just like Samespace.
            </p>
            <ImageView
              src={"/company/team.jpg"}
              width={1000}
              height={600}
              quality={100}
              className="rounded-lg"
              alt="Samespace Team"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full md:w-4/6 mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              Innovate, Always
            </h1>
            <p className="text-xl leading-normal mb-8">
              To get ahead in the world as it is, you have to be up to date on
              the latest developments at all times. Samespace’s relentless
              passion for innovation means that everyone working here is way
              ahead of the curve on the latest advances and trends in
              technology. Join us to stay ten steps ahead of the competition.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {jobs
                .filter((job) => job.draft === "no")
                .map((job) => {
                  return (
                    <Link key={job.title} href={`careers/${job.slug}`}>
                      <a>
                        <div className="flex items-center justify-between text-left p-6 bg-white shadow-subtle rounded-lg">
                          <div>
                            <p className="text-lg md:text-xl text-accent">
                              {job.title}
                            </p>
                            <p className="text-lg opacity-60 mt-2">
                              {job.location}
                            </p>
                          </div>
                          <div className="hidden md:block">
                            <ChevronRightIcon />
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const jobs = getAllPosts(
    ["title", "location", "draft", "slug"],
    "content/careers"
  );

  return {
    props: { jobs },
  };
}
