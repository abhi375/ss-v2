import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { insertHubspotTracker, insertZoomInfoTracker } from "@/lib/tracker";
import Link from "next/link";
import { HoverArrowIcon } from "./Icons";

export default function ConsentBanner() {
  const [consent, setConsent] = useState(undefined);
  const [cookies, setCookie] = useCookies(["consent"]);
  const showNotice = consent === undefined;

  useEffect(() => {
    const savedConsent = cookies.consent || undefined;
    setConsent(savedConsent);
    if (savedConsent === "true") {
      insertHubspotTracker();
      insertZoomInfoTracker();
    }
  }, []);

  function handleConsent(accepted) {
    const consentValue = accepted ? "true" : "false";
    setConsent(consentValue);
    setCookie("consent", consentValue, {
      path: "/",
      maxAge: 3600 * 24 * 30 * 12,
    });
    if (accepted) {
      insertHubspotTracker();
      insertZoomInfoTracker();
    }
  }

  return (
    <AnimatePresence>
      {showNotice && (
        <motion.div
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: "0%",
            opacity: 1,
          }}
          exit={{
            y: "100%",
            opacity: 1,
          }}
          transition={{ easings: "easeInOut", duration: 0.4 }}
          className="px-6 sm:px-12 py-4 sm:py-2 fixed z-50 inset-x-0 bottom-0 bg-white shadow-consentbanner"
        >
          <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="text-base mb-4 sm:mb-0">
              This site uses cookies to give you a better user experience. See
              our{" "}
              <Link href="/legal/cookies">
                <a className="text-accent">cookie policy</a>
              </Link>
              .
            </div>

            <motion.div
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.04 }}
              className="px-5 py-1 border-2 border-solid border-accent text-accent group flex items-center justify-center font-semibold rounded-full cursor-pointer"
              onClick={() => handleConsent(true)}
            >
              Agree
              <HoverArrowIcon />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
