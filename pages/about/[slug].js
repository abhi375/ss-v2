import { BackIcon } from "@/components/Icons";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { NextSeo } from "next-seo";
import ImageView from "@/components/ImageView";
import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";

export default function LeaderPage({ post }) {
  return (
    <>
      <NextSeo title={`${post.name} - Samespace`} />
      <section className="px-12 py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-[640px] mx-auto">
            <Link href="/about">
              <a className="text-accent inline-flex items-center text-lg">
                <BackIcon />
                <div className="ml-2">Back</div>
              </a>
            </Link>

            <div className="flex items-center  mt-8">
              <div
                className={`w-[120px] h-[120px] bg-accent  rounded-full overflow-hidden ${
                  post.id === 1
                    ? "bg-accent"
                    : post.id === 2
                    ? "bg-green-600"
                    : post.id === 3
                    ? "bg-yellow-600"
                    : "bg-[#007aff]"
                }`}
              >
                <ImageView
                  width="120px"
                  height="120px"
                  src={post.avatar}
                  alt={post.name}
                />
              </div>
              <div className="flex-1 ml-8">
                <h1 className="text-4xl mb-2 font-bold">{post.name}</h1>
                <p className="text-lg opacity-60">{post.designation}</p>
              </div>
            </div>
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
    ["name", "designation", "avatar", "content"],
    "content/leadership"
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
  const posts = getAllPosts(["slug"], "content/leadership");

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
