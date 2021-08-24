import Banner from "@/components/Banner";
import LogoWall from "@/components/LogoWall";
import { getAllPosts } from "@/lib/api";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";
import Link from "next/link";

export default function CustomersPage({ stories, toggleDemoForm }) {
  return (
    <>
      <NextSeo title="Customers - Samespace" />
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-[960px] text-center mx-auto ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
            See how samespace is helping innovative companies to be more
            productive.
          </h1>
        </div>
      </section>
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {stories &&
            stories.map((story) => {
              return (
                <Link key={story.slug} href={`/customers/${story.slug}`}>
                  <a>
                    <article className="bg-white md:p-4 md:-m-4 md:hover:shadow-subtle rounded-md">
                      <div>
                        <ImageView
                          alt={story.title}
                          src={story.coverImage}
                          width="500px"
                          height="300px"
                          priority
                          className="border border-solid border-black border-opacity-10 rounded-md overflow-hidden"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-lg font-semibold mt-4 mb-2">
                          {story.title}
                        </h3>

                        <div className="text-accent flex items-center">
                          <div className=" text-lg font-semibold">
                            Read Story
                          </div>
                        </div>
                      </div>
                    </article>
                  </a>
                </Link>
              );
            })}
        </div>
      </section>
      <LogoWall />
      <Banner bannerAction={() => toggleDemoForm("Get Demo")} />
    </>
  );
}

export async function getStaticProps() {
  const stories = getAllPosts(
    ["title", "coverImage", "slug", "id"],
    "content/customers"
  );

  return {
    props: { stories },
  };
}
