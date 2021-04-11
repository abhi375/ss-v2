import { useEffect, useState } from "react";
import { BackIcon } from "@/components/Icons";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

import ReactMarkdown from "react-markdown/with-html";

export default function CustomerStory({ post }) {
  const [shareURL, setShareURL] = useState("");

  useEffect(() => {
    setShareURL(window && window.location.href);
  }, []);

  return (
    <>
      <NextSeo
        title={`${post.title}`}
        openGraph={{
          type: "website",
          url: shareURL ? shareURL : "https://www.samespace.com/blogs",
          title: post.title,
          images: [
            {
              url: "https://samespace.vercel.app" + post.coverImage,
              alt: post.title,
            },
          ],
        }}
        twitter={{
          handle: "@samespace",
          site: "https://www.samespace,com",
        }}
      />
      <section className="px-12 py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-[640px] mx-auto">
            <Link href="/customers">
              <a className="text-accent inline-flex items-center text-lg">
                <BackIcon />
                <div className="ml-2">Back</div>
              </a>
            </Link>
            <h1 className="text-3xl font-bold mb-8 mt-4">{post.title}</h1>
            <Image
              src={post.coverImage}
              alt={post.title}
              width="640px"
              height="384px"
              priority
              className="border border-solid border-black border-opacity-10 rounded-md overflow-hidden"
            />
            <div className="my-8 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-4 border-b border-solid border-black border-opacity-10">
              {post.industry && (
                <div>
                  <div className="font-medium opacity-60">Industry</div>
                  <p className="text-lg font-semibold mt-1">{post.industry}</p>
                </div>
              )}

              {post.useCase && (
                <div>
                  <div className="font-medium opacity-60">Use case</div>
                  <p className="text-lg font-semibold mt-1">{post.useCase}</p>
                </div>
              )}

              {post.technology && (
                <div>
                  <div className="font-medium opacity-60">Technology</div>
                  <p className="text-lg font-semibold mt-1">
                    {post.technology}
                  </p>
                </div>
              )}

              {post.employees && (
                <div>
                  <div className="font-medium opacity-60">Employees</div>
                  <p className="text-lg font-semibold mt-1">{post.employees}</p>
                </div>
              )}

              {post.activeUsers && (
                <div>
                  <div className="font-medium opacity-60">Active Users</div>
                  <p className="text-lg font-semibold mt-1">
                    {post.activeUsers}
                  </p>
                </div>
              )}
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
    [
      "title",
      "slug",
      "content",
      "coverImage",
      "industry",
      "useCase",
      "activeUsers",
      "employees",
      "technology",
    ],
    "content/customers"
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
  const posts = getAllPosts(["slug"], "content/customers");

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
