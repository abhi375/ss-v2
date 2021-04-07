import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";

export default function CustomerStory({ post }) {
  console.log(post);
  return (
    <>
      <section className="px-12 py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-[640px] mx-auto">
            <Link href="/blogs">
              <a className="text-accent text-lg">Back</a>
            </Link>
            <h1 className="text-3xl font-bold my-4">{post.title}</h1>
            {post.authorAvatar && (
              <div className=" flex items-center mb-8">
                <Image
                  src={post.authorAvatar}
                  width="40px"
                  height="40px"
                  className="rounded-full"
                />
                <p className="ml-2 text-lg">{post.author}</p>
              </div>
            )}
            <Image
              src={post.cover}
              width="640px"
              height="320px"
              priority
              className="border border-solid border-black border-opacity-10 rounded-md overflow-hidden"
            />
          </div>
          <ReactMarkdown
            className="prose max-w-[640px] prose-lg my-8 mx-auto"
            escapeHtml={false}
            source={post.content}
          />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(
    params.slug,
    ["title", "slug", "content", "cover", "authorAvatar", "author"],
    "content/blogs"
  );
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"], "content/blogs");

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
