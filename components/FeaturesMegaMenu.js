import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  AnalyticsIcon,
  CCIcon,
  CRMIntegrationsIcon,
  DeveloperToolsIcon,
  EnterpriseIcon,
  HubspotIcon,
  SalesforceIcon,
  StartupIcon,
  StudioIcon,
  VoiceCloudIcon,
} from "./Icons";

export default function FeaturesMegaMenu() {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute px-8 pt-3 pb-3 w-48 -left-6 top-16 bg-white z-40 shadow-popover origin-top w-[280px]"
        initial={{ scaleY: 0.96, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0.96, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        key={"solutions-megamenu"}
      >
        <Link href="/features/contact-center">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-green-600 hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-green-600 rounded-full grid place-items-center mr-2">
                <CCIcon />
              </div>
              <div>Contact Center</div>
            </motion.div>
          </a>
        </Link>
        <Link href="/features/studio">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-yellow-500 hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-yellow-500 rounded-full grid place-items-center mr-2">
                <StudioIcon />
              </div>
              <div>Conversation Studio</div>
            </motion.div>
          </a>
        </Link>
        <Link href="/features/analytics">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-rose-500 hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-rose-500 rounded-full grid place-items-center mr-2">
                <AnalyticsIcon />
              </div>
              <div>Analytics</div>
            </motion.div>
          </a>
        </Link>

        <Link href="/features/developers">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-indigo-600 hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-indigo-600 rounded-full grid place-items-center mr-2">
                <DeveloperToolsIcon />
              </div>
              <div>Developer Tools</div>
            </motion.div>
          </a>
        </Link>

        <Link href="/features/voicecloud">
          <a>
            <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-gray-600 hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
              <div className="w-8 h-8 bg-gray-600 rounded-full grid place-items-center mr-2">
                <VoiceCloudIcon />
              </div>
              <div>Voice Cloud</div>
            </motion.div>
          </a>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
