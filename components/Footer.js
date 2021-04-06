import Link from "next/link";
import { LinkedInIcon, LogoIcon, TwitterIcon, YouTubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="px-12 pt-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full grid grid-cols-4 gap-12">
          <div>
            <p className="mb-2 font-bold">Solutions</p>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/solutions/salesforce">
                <a>Salesforce</a>
              </Link>
              <Link href="/solutions/hubspot">
                <a>Hubspot</a>
              </Link>
              <Link href="/solutions/crm-integration">
                <a>All other CRMs</a>
              </Link>
              <Link href="/solutions/smb">
                <a>Small & Midsize Business</a>
              </Link>
              <Link href="/solutions/enterprise">
                <a>Enterprise</a>
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-2 font-bold">Platform</p>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/features/contact-center">
                <a>Contact Center</a>
              </Link>
              <Link href="/features/studio">
                <a>Conversational Studio</a>
              </Link>
              <Link href="/features/analytics">
                <a>Analytics</a>
              </Link>
              <Link href="/features/developers">
                <a>Developer Tools</a>
              </Link>
              <Link href="/features/voicecloud">
                <a>Voice Cloud</a>
              </Link>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-2 font-bold">Company</p>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/features/contact-center">
                <a>About</a>
              </Link>
              <Link href="/features/studio">
                <a>Customers</a>
              </Link>
              <Link href="/features/analytics">
                <a>Blog</a>
              </Link>
              <Link href="/features/developers">
                <a>Careers</a>
              </Link>
              <a
                href="https://www.support.samespace.com"
                target="_blank"
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
                href="https://www.support.samespace.com"
                target="_blank"
                rel="noreferer noopener"
                className="grid place-items-center w-12 h-12 bg-white shadow-sm rounded-full"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.support.samespace.com"
                target="_blank"
                rel="noreferer noopener"
                className="grid place-items-center w-12 h-12 bg-white shadow-sm rounded-full"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.support.samespace.com"
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
          <div className="flex items-center justify-between">
            <LogoIcon />
            <div className="grid grid-flow-col auto-cols-auto gap-8 items-center">
              <Link href="/legal/privacy">
                <a>Privacy</a>
              </Link>
              <Link href="/legal/terms">
                <a>Terms</a>
              </Link>
              <p className="opacity-50">
                Copyright © 2021 Samespace Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
