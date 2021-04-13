import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoIcon, MenuIcon } from "@/components/Icons";
import Button from "@/components/Button";
import SolutionsMegaMenu from "@/components/SolutionsMegaMenu";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import FeaturesMegaMenu from "./FeaturesMegaMenu";
import { selectSpaceId } from "@/lib/session";
import SpaceIDPopover from "./SpaceIDPopover";

export default function Nav({ toggleDemoForm, toggleMenu, closeMobileMenu }) {
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
            className="fixed inset-0 z-30 bg-black bg-opacity-40 transition duration-300"
            key={"overlay"}
            onClick={() => handleActiveMegaMenu("")}
          ></motion.div>
        </AnimatePresence>
      )}

      <nav className="px-6 sm:px-10 lg:px-12 fixed inset-x-0 top-0 z-40 bg-white h-16 shadow-sm">
        <div className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-between">
          <Link href="/">
            <a onClick={closeMobileMenu}>
              <LogoIcon />
            </a>
          </Link>

          <div className="hidden lg:flex flex-1 h-full ">
            <div className="grid grid-flow-col auto-cols-auto gap-0 items-center ml-8">
              <AnimateSharedLayout>
                <div
                  className="text-black place-items-center group cursor-pointer relative h-full grid px-4"
                  onClick={() => handleActiveMegaMenu("features")}
                  onMouseEnter={() => handleActiveMegaMenu("features")}
                  onMouseLeave={() => handleActiveMegaMenu("")}
                >
                  <div className="group-hover:text-accent text-base font-semibold">
                    Platform
                  </div>
                  {activeMegaMenu === "features" && <FeaturesMegaMenu />}
                </div>
                <div
                  className="text-black place-items-center group cursor-pointer relative h-full grid px-4"
                  onClick={() => handleActiveMegaMenu("solutions")}
                  onMouseEnter={() => handleActiveMegaMenu("solutions")}
                  onMouseLeave={() => handleActiveMegaMenu("")}
                >
                  <div className="group-hover:text-accent text-base font-semibold">
                    Solutions
                  </div>
                  {activeMegaMenu === "solutions" && <SolutionsMegaMenu />}
                </div>
              </AnimateSharedLayout>
              <div className="text-black grid place-items-center hover:text-accent relative h-full cursor-pointer px-4">
                <Link href="/pricing">
                  <a className="text-base font-semibold">Pricing</a>
                </Link>
              </div>
              <div className="text-black grid place-items-center hover:text-accent relative h-full cursor-pointer px-4">
                <Link href="/customers">
                  <a className="text-base font-semibold">Customers</a>
                </Link>
              </div>
            </div>

            <div className="grid grid-flow-col auto-cols-auto gap-8 items-center ml-auto">
              <>
                {accounts && accounts.length > 1 ? (
                  <div
                    className="flex items-center cursor-pointer relative ml-auto h-full"
                    onClick={() => handleActiveMegaMenu("dashboard")}
                  >
                    <div className="text-black place-items-center hover:text-accent text-base font-semibold cursor-pointer px-4">
                      Dashboard
                    </div>

                    {activeMegaMenu === "dashboard" && (
                      <SpaceIDPopover accounts={accounts} />
                    )}
                  </div>
                ) : accounts && accounts.length === 1 ? (
                  <div
                    className="text-black place-items-center hover:text-accent text-base font-semibold cursor-pointer px-4"
                    onClick={() => selectSpaceId(accounts[0])}
                  >
                    Dashboard
                  </div>
                ) : (
                  <div className="text-black grid place-items-center hover:text-accent relative h-full cursor-pointer px-4">
                    <Link href="/signin">
                      <a className="text-base font-semibold">Sign In</a>
                    </Link>
                  </div>
                )}
              </>

              <Button title="Talk to an Expert" onClick={toggleDemoForm} />
            </div>
          </div>

          <div
            className="w-8 h-8 grid lg:hidden place-items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </div>
        </div>
      </nav>
    </>
  );
}
