import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoIcon } from "@/components/Icons";
import Button from "@/components/Button";
import SolutionsMegaMenu from "@/components/SolutionsMegaMenu";
import { AnimatePresence, motion } from "framer-motion";
import FeaturesMegaMenu from "./FeaturesMegaMenu";
import { selectSpaceId } from "@/lib/session";

export default function Nav({ toggleDemoForm }) {
  const [activeMegaMenu, setActiveMegaMenu] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    let cookies = getCookies();
    var spaceIds = fetchSpaceIds(cookies, "account_");
    setAccounts(spaceIds);
  }, []);

  const handleActiveMegaMenu = (selectedItem) => {
    if (activeMegaMenu === selectedItem) {
      setActiveMegaMenu("");
    } else {
      setActiveMegaMenu(selectedItem);
    }
  };

  const getCookies = () => {
    var pairs = document.cookie.split(";");
    var cookies = {};
    if (document.cookie.length > 0)
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
      }
    return cookies;
  };

  const fetchSpaceIds = (obj, str) => {
    var key,
      results = [];
    for (key in obj)
      obj.hasOwnProperty(key) &&
        key.indexOf(str) === 0 &&
        results.push([key, JSON.parse(obj[key])]);
    return results;
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
      <nav className="px-6 sm:px-10 lg:px-12 fixed inset-x-0 top-0 z-40 bg-white h-16 shadow-sm">
        <div className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-between">
          <Link href="/">
            <a>
              <LogoIcon />
            </a>
          </Link>

          <div className="hidden lg:flex flex-1 h-full ">
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
              <>
                {accounts && accounts.length > 1 ? (
                  <div
                    className="flex items-center cursor-pointer relative ml-auto"
                    onClick={() => handleActiveMegaMenu("dashboard")}
                  >
                    <div className="text-black place-items-center hover:text-accent cursor-pointer px-4">
                      Dashboard
                    </div>

                    {activeMegaMenu === "dashboard" && <div>Spaces</div>}
                  </div>
                ) : accounts && accounts.length === 1 ? (
                  <div
                    className="text-black place-items-center hover:text-accent cursor-pointer px-4"
                    onClick={() => selectSpaceId(accounts[0])}
                  >
                    Dashboard
                  </div>
                ) : (
                  <>
                    <Link href="/signin">
                      <a className="text-black place-items-center hover:text-accent cursor-pointer px-4">
                        Sign In
                      </a>
                    </Link>
                  </>
                )}
              </>

              <Button title="Get a demo" onClick={toggleDemoForm} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
