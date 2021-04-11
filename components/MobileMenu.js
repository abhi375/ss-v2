import { motion } from "framer-motion";
import Link from "next/link";
import PricingPage from "pages/pricing";
import Button from "./Button";
import {
  AnalyticsIcon,
  BlogIcon,
  CCIcon,
  CRMIntegrationsIcon,
  CustomersIcon,
  DeveloperToolsIcon,
  EnterpriseIcon,
  HoverArrowIcon,
  HubspotIcon,
  IntegrationsIcon,
  JobsIcon,
  PricingIcon,
  SalesforceIcon,
  StartupIcon,
  StudioIcon,
  VoiceCloudIcon,
} from "./Icons";

export default function MobileMenu({ toggleDemoForm }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      className="fixed bg-white overflow-scroll w-full mobileMenuHeight  transform origin-top top-16 z-30 inset-x-0 px-6 md:px-12 py-6"
    >
      <div className="text-[12px] opacity-60 mb-6 font-bold uppercase tracking-wide">
        Platform
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/platform/contact-center">
          <a className="flex items-center">
            <div>
              <CCIcon />
            </div>
            <div className="ml-2 font-semibold">Contact Center</div>
          </a>
        </Link>

        <Link href="/platform/studio">
          <a className="flex items-center">
            <div>
              <StudioIcon />
            </div>
            <div className="ml-2 font-semibold">Studio</div>
          </a>
        </Link>

        <Link href="/platform/analytics">
          <a className="flex items-center">
            <div>
              <AnalyticsIcon />
            </div>
            <div className="ml-2 font-semibold">Analytics</div>
          </a>
        </Link>

        <Link href="/platform/developers">
          <a className="flex items-center">
            <div>
              <DeveloperToolsIcon />
            </div>
            <div className="ml-2 font-semibold">Developers</div>
          </a>
        </Link>

        <Link href="/platform/voicecloud">
          <a className="flex items-center">
            <div>
              <VoiceCloudIcon />
            </div>
            <div className="ml-2 font-semibold">VoiceCloud</div>
          </a>
        </Link>
      </div>

      <div className="text-[12px] opacity-60 mt-12 mb-6 font-bold uppercase tracking-wide">
        Solutions by CRM
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/solutions/salesforce">
          <a className="flex items-center">
            <div className="text-[#009EDB]">
              <SalesforceIcon />
            </div>
            <div className="ml-2 font-semibold">Salesforce</div>
          </a>
        </Link>

        <Link href="/solutions/hubspot">
          <a className="flex items-center">
            <div className="text-[#FF6f1f]">
              <HubspotIcon />
            </div>
            <div className="ml-2 font-semibold">Hubspot</div>
          </a>
        </Link>

        <Link href="/solutions/crm-integrations">
          <a className="flex items-center">
            <div className="text-accent">
              <CRMIntegrationsIcon />
            </div>
            <div className="ml-2 font-semibold">CRM Integrations</div>
          </a>
        </Link>
      </div>

      <div className="text-[12px] opacity-60 mt-12 mb-6 font-bold uppercase tracking-wide">
        Solutions by Company Type
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/solutions/smb">
          <a className="flex items-center">
            <div className="text-green-600">
              <StartupIcon />
            </div>
            <div className="ml-2 font-semibold">Small & Midsize</div>
          </a>
        </Link>
        <Link href="/solutions/enterprise">
          <a className="flex items-center">
            <div className="text-indigo-600">
              <EnterpriseIcon />
            </div>
            <div className="ml-2 font-semibold">Enterprise</div>
          </a>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-12">
        <Link href="/pricing">
          <a className="flex items-center">
            <div className="text-[#000033] opacity-40">
              <PricingIcon />
            </div>
            <div className="ml-2 font-semibold">Pricing</div>
          </a>
        </Link>
        <Link href="/customers">
          <a className="flex items-center">
            <div className="text-[#000033] opacity-40">
              <CustomersIcon />
            </div>
            <div className="ml-2 font-semibold">Customers</div>
          </a>
        </Link>
        <Link href="/blogs">
          <a className="flex items-center">
            <div className="text-[#000033] opacity-40">
              <BlogIcon />
            </div>
            <div className="ml-2 font-semibold">Blogs</div>
          </a>
        </Link>

        <Link href="/careers">
          <a className="flex items-center">
            <div className="text-[#000033] opacity-40">
              <JobsIcon />
            </div>
            <div className="ml-2 font-semibold">Careers</div>
          </a>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        <Link href="/signin">
          <a className="px-4 py-1.5 w-full bg-white text-accent border-2 border-solid border-accent font-semibold flex items-center justify-center group rounded-full">
            <span>Sign In</span>
            <HoverArrowIcon />
          </a>
        </Link>

        <button
          onClick={toggleDemoForm}
          className="px-4 py-1.5 w-full bg-accent text-white font-semibold flex items-center justify-center group rounded-full"
        >
          <span>Book a demo</span>
          <HoverArrowIcon />
        </button>
      </div>
    </motion.div>
  );
}
