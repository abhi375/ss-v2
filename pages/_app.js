import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <section className="mt-16">
        <Component {...pageProps} />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
