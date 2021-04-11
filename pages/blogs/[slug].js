import {
  BackIcon,
  FBIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/Icons";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import ReactMarkdown from "react-markdown/with-html";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import NewsletterSubscriptionForm from "@/components/NewsletterSubscriptionForm";

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
          title: post.title ? post.title : "Read Samespace Blog",
          images: [
            {
              url: "https://samespace.vercel.app" + post.cover,
              alt: post.title,
            },
          ],
        }}
        twitter={{
          handle: "@samespace",
          site: "https://www.samespace,com",
        }}
      />
      <section className="px-6 sm:px-10 lg:px-12 pt-20 pb-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-[640px] mx-auto">
            <Link href="/blogs">
              <a className="text-accent inline-flex items-center text-lg">
                <BackIcon />
                <div className="ml-2">Back</div>
              </a>
            </Link>
            <h1 className="text-3xl font-bold my-4">{post.title}</h1>
            {post.authorAvatar && (
              <div className=" flex items-center mb-8">
                <Image
                  src={post.authorAvatar}
                  width="40px"
                  height="40px"
                  className="rounded-full"
                  alt={post.author}
                />
                <p className="ml-2 text-lg">{post.author}</p>
              </div>
            )}
            <Image
              src={post.cover}
              width="640px"
              height="320px"
              priority
              alt={post.title}
              className="border border-solid border-black border-opacity-10 rounded-md overflow-hidden"
            />
          </div>
          <ReactMarkdown
            className="prose max-w-[640px] prose-lg my-8 mx-auto"
            escapeHtml={false}
            source={post.content}
          />
          <div className="max-w-[640px] my-8 mx-auto border-t border-solid border-black border-opacity-10 py-10 text-center">
            <p className="text-lg opacity-60 mb-4">Share article</p>
            <div className="flex items-center justify-center">
              <TwitterShareButton
                title={`Read "${post.title}" by ${post.author} on the Samespace blog`}
                className="mx-4 focus:outline-none"
                url={shareURL ? shareURL : "https://www.samespace.com/blog"}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#1DA1F2] hover:shadow-inset text-white font-semibold rounded-full ">
                  <TwitterIcon />
                </div>
              </TwitterShareButton>

              <LinkedinShareButton
                url={shareURL ? shareURL : "https://www.samespace.com/blog"}
                className="mx-4  focus:outline-none"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#0077b5] hover:shadow-inset text-white font-semibold rounded-full ">
                  <LinkedInIcon />
                </div>
              </LinkedinShareButton>

              <FacebookShareButton
                url={shareURL ? shareURL : "https://www.samespace.com/blog"}
                quote={`Read "${post.title}" by ${post.author} on the Samespace blog`}
                className="mx-4 focus:outline-none"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#4267B2] hover:shadow-inset text-white font-semibold rounded-full ">
                  <FBIcon />
                </div>
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-10 lg:px-12 py-20 border-t border-solid border-black border-opacity-5">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-2xl">Stay Connected</h3>
          <p className="text-xl mt-3 mb-6 opacity-60">
            Subscribe to receive new blog posts and updates from Samespace.
          </p>
          <div className="max-w-[480px] mx-auto">
            <NewsletterSubscriptionForm />
          </div>
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
