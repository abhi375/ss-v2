import Button from "@/components/Button";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { useRouter } from "next/router";

export default function JobDetailPage({ post }) {
  const router = useRouter();

  return (
    <>
      <section className="px-12 py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-[640px] mx-auto">
            <Link href="/careers">
              <a className="text-accent text-lg">Back</a>
            </Link>
            <h1 className="text-4xl font-extrabold mt-4">{post.title}</h1>
          </div>
          <ReactMarkdown
            className="prose max-w-[640px] prose-lg mt-12 mb-8 mx-auto"
            escapeHtml={false}
            source={post.content}
          />
          <div className="prose max-w-[640px] mx-auto text-center pt-8 border-t border-solid border-black border-opacity-10">
            <Link
              href={{
                pathname: `${router.asPath}/apply`,
                query: { jobPost: post.title },
              }}
            >
              <a>Apply for this job</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(
    params.slug,
    ["title", "location", "content"],
    "content/careers"
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
  const posts = getAllPosts(["slug"], "content/careers");

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
