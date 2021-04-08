import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  CRMIntegrationsIcon,
  EnterpriseIcon,
  HubspotIcon,
  SalesforceIcon,
  StartupIcon,
} from "./Icons";

export default function SolutionsMegaMenu() {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute px-8 pt-6 pb-3 w-48 -left-6 top-16 bg-white z-40 shadow-popover origin-top w-[280px]"
        initial={{ scaleY: 0.96, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0.96, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        key={"solutions-megamenu"}
      >
        <div className="text-[12px] uppercase tracking-wider font-semibold opacity-60 mb-2">
          By CRM
        </div>
        <Link href="/solutions/salesforce">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-[#009EDB] hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-[#009EDB] rounded-full grid place-items-center mr-2">
                <SalesforceIcon />
              </div>
              <div>Salesforce</div>
            </motion.div>
          </a>
        </Link>
        <Link href="/solutions/hubspot">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-[#FF6F1F] hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-[#FF6F1F] rounded-full grid place-items-center mr-2">
                <HubspotIcon />
              </div>
              <div>Hubspot</div>
            </motion.div>
          </a>
        </Link>
        <Link href="/solutions/crm-integrations">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-accent hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-accent rounded-full grid place-items-center mr-2">
                <CRMIntegrationsIcon />
              </div>
              <div>CRM Integrations</div>
            </motion.div>
          </a>
        </Link>
        <div className="text-[12px] uppercase tracking-wider font-semibold opacity-60 mb-2 mt-6">
          By Company Type
        </div>
        <Link href="/solutions/smb">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-green-600 hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-green-600 rounded-full grid place-items-center mr-2">
                <StartupIcon />
              </div>
              <div>Small & Midsize</div>
            </motion.div>
          </a>
        </Link>

        <Link href="/solutions/enterprise">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-blue-600 hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-blue-600 rounded-full grid place-items-center mr-2">
                <EnterpriseIcon />
              </div>
              <div>Enterprise</div>
            </motion.div>
          </a>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
