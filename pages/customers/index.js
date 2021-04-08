import Banner from "@/components/Banner";
import LogoWall from "@/components/LogoWall";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default function CustomersPage({ stories, toggleDemoForm }) {
  return (
    <>
      <section className="px-12 pt-20">
        <div className="max-w-screen-lg mx-auto ">
          <h1 className="text-5xl font-extrabold">Our Customers</h1>
          <p className="text-xl mt-4">
            Meet the companies that chose Samespace. They’re growing every day,
            and we love that.
          </p>
        </div>
      </section>
      <section className="px-12 py-16">
        <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-12">
          {stories &&
            stories.map((story) => {
              return (
                <Link key={story.slug} href={`/customers/${story.slug}`}>
                  <a>
                    <article className="bg-white p-4 -m-4 hover:shadow-subtle rounded-md">
                      <div>
                        <Image
                          src={story.coverImage}
                          width="500px"
                          height="300px"
                          priority
                          className="border border-solid border-black border-opacity-10 rounded-md overflow-hidden"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">
                          {story.title}
                        </h3>

                        <div className="text-accent flex items-center">
                          <div className=" text-lg font-medium">Read Story</div>
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
      <Banner bannerAction={toggleDemoForm} />
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
