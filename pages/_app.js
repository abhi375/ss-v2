import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import DemoForm from "@/components/DemoForm";

function MyApp({ Component, pageProps }) {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const toggleDemoForm = () => {
    return setShowDemoForm(!showDemoForm);
  };

  return (
    <>
      <AnimatePresence>
        {showDemoForm && <DemoForm toggleDemoForm={toggleDemoForm} />}
      </AnimatePresence>
      <Nav toggleDemoForm={toggleDemoForm} />
      <section className="mt-16">
        <Component {...pageProps} toggleDemoForm={toggleDemoForm} />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
