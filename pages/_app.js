import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import DemoForm from "@/components/DemoForm";
import ConsentBanner from "@/components/ConsentBanner";
import { useRouter } from "next/router";
import MobileMenu from "@/components/MobileMenu";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [demoFormTitle, setDemoFormTitle] = useState("Get Demo");
  const router = useRouter();

  const toggleDemoForm = (formTitle) => {
    setShowDemoForm(!showDemoForm);
    setDemoFormTitle(formTitle);
  };

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {router.pathname === "/signin" ? (
        <section>
          <Component {...pageProps} toggleDemoForm={toggleDemoForm} />
        </section>
      ) : (
        <>
          <DefaultSeo
            title="Samespace"
            description="Cloud Contact Center Software. Centered on Experience."
          />

          <AnimatePresence>
            {showDemoForm && (
              <DemoForm
                demoFormTitle={demoFormTitle}
                toggleDemoForm={toggleDemoForm}
                closeDemoForm={() => setShowDemoForm(false)}
              />
            )}
          </AnimatePresence>

          <ConsentBanner />

          <AnimatePresence>
            {showMobileMenu && (
              <MobileMenu
                toggleMenu={() => setShowMobileMenu(false)}
                toggleDemoForm={() => toggleDemoForm("Get Demo")}
              />
            )}
          </AnimatePresence>

          <Nav
            toggleMenu={toggleMenu}
            closeMobileMenu={() => setShowMobileMenu(false)}
            toggleDemoForm={() => toggleDemoForm("Talk to an Expert")}
            closeDemoForm={() => setShowDemoForm(false)}
          />
          <section className="mt-16">
            <Component {...pageProps} toggleDemoForm={toggleDemoForm} />
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
