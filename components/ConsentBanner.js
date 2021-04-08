import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCookies } from "react-cookie";
import {
  insertGoogleTracker,
  insertHubspotTracker,
  insertZoomInfoTracker,
} from "@/lib/tracker";
import Link from "next/link";

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
      insertGoogleTracker();
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
      insertGoogleTracker();
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
          className="px-12 py-4 fixed z-50 inset-x-0 bottom-0 bg-white shadow-consentbanner"
        >
          <div className="max-w-screen-lg mx-auto flex items-center justify-between">
            <div className="text-lg">
              This site uses cookies to give you a better user experience.
              <wbr /> See our{" "}
              <Link href="/legal/cookies">
                <a className="text-accent">cookie policy</a>
              </Link>
              .
            </div>

            <motion.div
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.04 }}
              className="px-4 py-1 border-2 border-solid border-accent text-accent font-semibold rounded-full cursor-pointer"
              onClick={() => handleConsent(true)}
            >
              Agree
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}