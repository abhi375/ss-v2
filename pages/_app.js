import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import DemoForm from "@/components/DemoForm";
import ConsentBanner from "@/components/ConsentBanner";
import { useRouter } from "next/router";
import MobileMenu from "@/components/MobileMenu";

function MyApp({ Component, pageProps }) {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  const toggleDemoForm = () => {
    return setShowDemoForm(!showDemoForm);
  };

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

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
            {showDemoForm && <DemoForm toggleDemoForm={toggleDemoForm} />}
          </AnimatePresence>

          <ConsentBanner />

          <AnimatePresence>
            {showMobileMenu && (
              <MobileMenu
                toggleMenu={() => setShowMobileMenu(false)}
                toggleDemoForm={toggleDemoForm}
              />
            )}
          </AnimatePresence>

          <Nav
            toggleMenu={toggleMenu}
            closeMobileMenu={() => setShowMobileMenu(false)}
            toggleDemoForm={toggleDemoForm}
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
