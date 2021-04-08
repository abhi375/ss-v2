import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default function BlogListing({ blogs }) {
  return (
    <>
      <section className="px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs &&
              blogs.map((blog) => {
                return (
                  <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
                    <a className="group bg-white shadow-subtle overflow-hidden rounded-md transition-all duration-300 flex flex-col hover:shadow-card transform hover:-translate-y-2">
                      <Image
                        src={blog.cover}
                        width="1200px"
                        height="600px"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                        alt={blog.title}
                      />

                      <div className="p-6 md:p-10 flex flex-1 flex-col items-stretch">
                        <div
                          className={`text-[12px] uppercase tracking-wider font-semibold ${
                            blog.category === "Editorial"
                              ? "text-accent"
                              : blog.category === "Product Update"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {blog.category}
                        </div>
                        <div className="flex-1">
                          <h3 className="mt-6 mb-3 text-xl font-bold">
                            {blog.title}
                          </h3>
                          <p className="text-lg opacity-70 leading-normal">
                            {blog.excerpt}
                          </p>
                        </div>

                        {blog.authorAvatar && (
                          <div className=" flex items-center mt-8">
                            <div className="w-8 h-8">
                              <Image
                                src={blog.authorAvatar}
                                width="40px"
                                height="40px"
                                className="rounded-full w-full h-full object-cover"
                                alt={blog.author}
                              />
                            </div>
                            <p className="ml-2 mb-0 text-lg opacity-60">
                              {blog.author}
                            </p>
                          </div>
                        )}
                      </div>
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const blogs = getAllPosts(
    [
      "title",
      "slug",
      "category",
      "author",
      "authorAvatar",
      "cover",
      "excerpt",
      "id",
    ],
    "content/blogs"
  );

  return {
    props: { blogs },
  };
}
