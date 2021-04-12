import Link from "next/link";
import { LinkedInIcon, LogoIcon, TwitterIcon, YouTubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 pt-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <p className="font-bold">Solutions</p>
            <div className="inline-flex flex-col">
              <Link href="/solutions/salesforce">
                <a className="mt-2 hover:text-accent">Salesforce</a>
              </Link>
              <Link href="/solutions/hubspot">
                <a className="mt-2 hover:text-accent">Hubspot</a>
              </Link>
              <Link href="/solutions/crm-integrations">
                <a className="mt-2 hover:text-accent">All other CRMs</a>
              </Link>
              <Link href="/solutions/smb">
                <a className="mt-2 hover:text-accent">
                  Small & Midsize Business
                </a>
              </Link>
              <Link href="/solutions/enterprise">
                <a className="mt-2 hover:text-accent">Enterprise</a>
              </Link>
            </div>
          </div>

          <div>
            <p className=" font-bold">Platform</p>
            <div className="inline-flex flex-col">
              <Link href="/platform/contact-center">
                <a className="mt-2 hover:text-accent">Contact Center</a>
              </Link>
              <Link href="/platform/studio">
                <a className="mt-2 hover:text-accent">Conversational Studio</a>
              </Link>
              <Link href="/platform/analytics">
                <a className="mt-2 hover:text-accent">Analytics</a>
              </Link>
              <Link href="/platform/developers">
                <a className="mt-2 hover:text-accent">Developer Tools</a>
              </Link>
              <Link href="/platform/voicecloud">
                <a className="mt-2 hover:text-accent">Voice Cloud</a>
              </Link>
              <Link href="/pricing">
                <a className="mt-2 hover:text-accent">Pricing</a>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-bold">Company</p>
            <div className="inline-flex flex-col">
              <Link href="/about">
                <a className="mt-2 hover:text-accent">About</a>
              </Link>
              <Link href="/customers">
                <a className="mt-2 hover:text-accent">Customers</a>
              </Link>
              <Link href="/blogs">
                <a className="mt-2 hover:text-accent">Blog</a>
              </Link>
              <Link href="/careers">
                <a className="mt-2 hover:text-accent">
                  <span>Careers</span>
                  <span className="inline-flex ml-2 px-2 py-0.5 bg-rose-600 bg-opacity-10 text-rose-800 text-[13px] rounded-full font-bold">
                    We're hiring
                  </span>
                </a>
              </Link>
              <a
                href="https://www.support.samespace.com"
                target="_blank"
                className="mt-2 hover:text-accent"
                rel="noreferer noopener"
              >
                Support
              </a>
            </div>
          </div>
          <div>
            <p className="mb-2 font-bold">Social</p>
            <div className="grid grid-flow-col auto-cols-min gap-4">
              <a
                href="https://twitter.com/samespace"
                target="_blank"
                rel="noreferer noopener"
                className="grid place-items-center w-12 h-12 bg-white shadow-sm rounded-full"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5EcIN95BUrNIOJ5c21E3CA/featured"
                target="_blank"
                rel="noreferer noopener"
                className="grid place-items-center w-12 h-12 bg-white shadow-sm rounded-full"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/samespace/"
                target="_blank"
                rel="noreferer noopener"
                className="grid place-items-center w-12 h-12 bg-white shadow-sm rounded-full"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-black border-opacity-10 mt-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <LogoIcon />
            <div className="grid mt-4 md:mt-0 md:grid-flow-col auto-cols-auto gap-2 md:gap-8 items-center">
              <Link href="/legal/privacy">
                <a>Privacy</a>
              </Link>
              <Link href="/legal/terms">
                <a>Terms</a>
              </Link>
              <p className="opacity-70">Copyright © 2021 Samespace Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
