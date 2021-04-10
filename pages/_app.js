import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import DemoForm from "@/components/DemoForm";
import ConsentBanner from "@/components/ConsentBanner";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const router = useRouter();

  console.log(router);

  const toggleDemoForm = () => {
    return setShowDemoForm(!showDemoForm);
  };

  return (
    <>
      {router.pathname === "/signin" ? (
        <section>
          <Component {...pageProps} toggleDemoForm={toggleDemoForm} />
        </section>
      ) : (
        <>
          <AnimatePresence>
            {showDemoForm && <DemoForm toggleDemoForm={toggleDemoForm} />}
          </AnimatePresence>

          <ConsentBanner />

          <Nav toggleDemoForm={toggleDemoForm} />
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
