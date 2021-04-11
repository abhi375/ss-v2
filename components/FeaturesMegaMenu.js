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
        layout="position"
        layoutId="popover"
        className="absolute px-8 pt-3 pb-3 w-48 -left-6 top-16 bg-white z-40 shadow-popover w-[280px] transform"
        key={"solutions-megamenu"}
      >
        <motion.div
          initial={{ opacity: 0, x: "4%" }}
          animate={{ opacity: 1, x: "0%" }}
          initial={{ opacity: 0, x: "-4%" }}
          transition={{ easings: "easeInOut" }}
        >
          <Link href="/platform/contact-center">
            <a>
              <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-accent hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
                <div className="w-8 h-8  rounded-full grid place-items-center mr-2">
                  <CCIcon />
                </div>
                <div>Contact Center</div>
              </motion.div>
            </a>
          </Link>
          <Link href="/platform/studio">
            <a>
              <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-accent hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
                <div className="w-8 h-8 rounded-full grid place-items-center mr-2">
                  <StudioIcon />
                </div>
                <div>Conversation Studio</div>
              </motion.div>
            </a>
          </Link>
          <Link href="/platform/analytics">
            <a>
              <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-accent hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
                <div className="w-8 h-8 rounded-full grid place-items-center mr-2 ">
                  <AnalyticsIcon />
                </div>
                <div>Analytics</div>
              </motion.div>
            </a>
          </Link>

          <Link href="/platform/developers">
            <a>
              <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-accent hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
                <div className="w-8 h-8  rounded-full grid place-items-center mr-2 ">
                  <DeveloperToolsIcon />
                </div>
                <div>Developer Tools</div>
              </motion.div>
            </a>
          </Link>

          <Link href="/platform/voicecloud">
            <a>
              <motion.div className="flex items-center group duration-300 transition bg-white hover:bg-accent hover:bg-opacity-10 px-4 py-3 -mx-4 rounded-md">
                <div className="w-8 h-8 rounded-full grid place-items-center mr-2 ">
                  <VoiceCloudIcon />
                </div>
                <div>Voice Cloud</div>
              </motion.div>
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
