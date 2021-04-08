import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import ReactMarkdown from "react-markdown";

export default function PrivacyPolicyPage({ post }) {
  return (
    <>
      <section className="px-12 py-16 bg-gray-50">
        <div className=" max-w-[640px] mx-auto">
          <h1 className="text-5xl font-extrabold">Terms</h1>
        </div>
      </section>
      <section className="px-12 py-12">
        <div className="max-w-screen-xl mx-auto">
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
    "terms",
    ["title", "slug", "content"],
    "content/legal"
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
  const posts = getAllPosts(["slug"], "content/legal");

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
