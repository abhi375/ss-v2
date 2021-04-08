import { useState } from "react";
import Link from "next/link";
import { LogoIcon } from "@/components/Icons";
import Button from "@/components/Button";
import SolutionsMegaMenu from "@/components/SolutionsMegaMenu";
import { AnimatePresence, motion } from "framer-motion";
import FeaturesMegaMenu from "./FeaturesMegaMenu";

export default function Nav({ toggleDemoForm }) {
  const [activeMegaMenu, setActiveMegaMenu] = useState("");

  const handleActiveMegaMenu = (selectedItem) => {
    if (activeMegaMenu === selectedItem) {
      setActiveMegaMenu("");
    } else {
      setActiveMegaMenu(selectedItem);
    }
  };

  return (
    <>
      {activeMegaMenu !== "" && activeMegaMenu !== "signin" && (
        <AnimatePresence>
          <motion.div
            transition={{ duration: 0.3, easings: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 bg-black bg-opacity-20 transition duration-300"
            key={"overlay"}
            onClick={() => handleActiveMegaMenu("")}
          ></motion.div>
        </AnimatePresence>
      )}
      <nav className="px-12 fixed inset-x-0 top-0 z-40 bg-white h-16 shadow-sm">
        <div className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-between">
          <Link href="/">
            <a>
              <LogoIcon />
            </a>
          </Link>

          <div className="flex flex-1 h-full">
            <div className="grid grid-flow-col auto-cols-auto gap-0 items-center ml-8">
              <div
                className="text-black place-items-center group cursor-pointer relative h-full grid px-4"
                onClick={() => handleActiveMegaMenu("features")}
                onMouseEnter={() => handleActiveMegaMenu("features")}
                onMouseLeave={() => handleActiveMegaMenu("")}
              >
                <div className="group-hover:text-accent">Features</div>
                {activeMegaMenu === "features" && <FeaturesMegaMenu />}
              </div>
              <div
                className="text-black place-items-center group cursor-pointer relative h-full grid px-4"
                onClick={() => handleActiveMegaMenu("solutions")}
                onMouseEnter={() => handleActiveMegaMenu("solutions")}
                onMouseLeave={() => handleActiveMegaMenu("")}
              >
                <div className="group-hover:text-accent">Solutions</div>
                {activeMegaMenu === "solutions" && <SolutionsMegaMenu />}
              </div>
              <div className="text-black place-items-center hover:text-accent cursor-pointer px-4">
                <Link href="/pricing">
                  <a>Pricing</a>
                </Link>
              </div>
              <div className="text-black place-items-center hover:text-accent cursor-pointer px-4">
                <Link href="/customers">
                  <a>Customers</a>
                </Link>
              </div>
            </div>

            <div className="grid grid-flow-col auto-cols-auto gap-8 items-center ml-auto">
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
              <Button title="Get a demo" onClick={toggleDemoForm} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
