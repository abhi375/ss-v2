import { useState } from "react";
import Banner from "@/components/Banner";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import pricingStructure from "@/lib/pricingStructure";
import { CheckIcon } from "@/components/Icons";
import Button from "@/components/Button";

export default function PricingPage({ toggleDemoForm }) {
  const isBoolean = (val) => "boolean" === typeof val;
  const [isActiveTab, setActiveTab] = useState("Growth");

  const handleActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <>
      {/* For Mobo */}

      <div className="md:hidden">
        <section className="py-12 px-6 bg-gradient bg-gradient-to-r from-[#0A2FB4] to-[#120078] text-white text-center">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">
              A plan for every kind{" "}
              <span className="block md:inline"> of business.</span>
            </h1>
          </div>
        </section>

        <section className="py-4 px-6 ">
          <div className="container mx-auto flex items-center justify-center">
            <div
              className={`w-1/2 text-center font-semibold cursor-pointer ${
                isActiveTab === "Growth" ? "text-accent" : "text-gray-700"
              }`}
              onClick={() => handleActiveTab("Growth")}
            >
              Growth
            </div>
            <div
              className={`w-1/2 text-center font-semibold cursor-pointer ${
                isActiveTab === "Enterprise" ? "text-accent" : "text-gray-700"
              }`}
              onClick={() => handleActiveTab("Enterprise")}
            >
              Enterprise
            </div>
          </div>
        </section>

        <section className="py-8 px-6 bg-gray-100">
          <div className="container mx-auto text-center flex items-center flex-col justify-center">
            {isActiveTab === "Growth" && (
              <>
                <h3 className="mb-2 font-bold text-2xl">$50</h3>
                <p className="text-base italic opacity-60 mb-4">
                  per user per month, billed annually. <br /> Starting at 10
                  users.
                </p>

                <Button
                  onClick={toggleDemoForm}
                  backgroundClass="bg-green-600"
                  title="Get a demo"
                />
              </>
            )}

            {isActiveTab === "Enterprise" && (
              <>
                <Button onClick={toggleDemoForm} title="Get a quote" />

                <p className="text-base italic opacity-60 mt-4">
                  Starting at 100 users
                </p>
              </>
            )}
          </div>
        </section>

        <section className="pt-8 px-6">
          <div className="container mx-auto">
            {pricingStructure.map((section) => {
              return (
                <div key={section.id} className="mb-8">
                  <p className="text-xl font-bold mb-4 border-solid border-b-2 border-gray-100 py-2">
                    {section.sectionTitle}
                  </p>
                  <div>
                    {isActiveTab === "Growth" ? (
                      <div>
                        {section.features.map((feature, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between py-3"
                            >
                              <div
                                className={`w-4/5 ${
                                  feature.description ? "dashed" : ""
                                }`}
                                data-tip={
                                  feature.description && feature.description
                                }
                              >
                                <span className="text-lg">{feature.name}</span>
                              </div>

                              <div className="w-auto">
                                {isBoolean(feature.growth) ? (
                                  feature.growth ? (
                                    <div className="w-4 h-4 text-green-600">
                                      <CheckIcon />
                                    </div>
                                  ) : (
                                    "—"
                                  )
                                ) : (
                                  feature.growth
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="mb-6">
                        {section.features.map((feature, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between py-3"
                            >
                              {feature.enterprise && (
                                <>
                                  <div
                                    className={`w-3/5 ${
                                      feature.description ? "dashed" : ""
                                    }`}
                                    data-tip={
                                      feature.description && feature.description
                                    }
                                  >
                                    <span>{feature.name}</span>
                                  </div>
                                  <div
                                    className={`text-green-600 underline ${
                                      feature.clickable ? "clickable" : ""
                                    }`}
                                    onClick={
                                      feature.clickable ? toggleDemoForm : null
                                    }
                                  >
                                    {isBoolean(feature.enterprise) ? (
                                      <div className="w-4 h-4 text-accent">
                                        <CheckIcon />
                                      </div>
                                    ) : (
                                      feature.enterprise
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* For Desktop  */}
      <div className="hidden md:block">
        <section className="px-12 py-8 bg-gray-50 sticky top-16 z-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-10 gap-6">
            <div className="col-span-4">
              <h1 className="text-3xl font-bold">
                The Every-Size <span className="block">Solution</span>
              </h1>
            </div>
            <div className="col-span-3">
              <div className="text-xl font-semibold text-green-700">Growth</div>
              <div className="text-3xl font-bold mt-2">$50</div>
              <div className="opacity-50  mt-2">
                per user per month, billed annually. Starting at 10 users.
              </div>
            </div>
            <div className="col-span-3">
              <div className="text-xl font-semibold text-accent">
                Enterprise
              </div>
              <div className="mt-2">
                <Button
                  onClick={toggleDemoForm}
                  title="Get a quote"
                  size="large"
                />
              </div>
              <div className="opacity-50 mt-2">Starting at 100 users.</div>
            </div>
          </div>
        </section>
        <section className="pt-16 px-8">
          <div className="max-w-screen-xl mx-auto">
            {pricingStructure.map((section) => {
              return (
                <div key={section.id}>
                  <motion.div className="flex items-center py-4  bg-white sticky top-0">
                    <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center mr-2">
                      {section.sectionIcon}
                    </div>
                    <p className="text-xl font-bold">{section.sectionTitle}</p>
                  </motion.div>
                  <div className="mb-16 ">
                    {section.features.map((feature, index) => {
                      return (
                        <div
                          key={index}
                          className="py-4 grid grid-cols-10 gap-6 px-2 items-center border-b border-solid border-black border-opacity-10"
                        >
                          <div
                            data-tip={
                              feature.description && feature.description
                            }
                            className={`col-span-4 ${
                              feature.description ? "dashed" : ""
                            }`}
                          >
                            <span>{feature.name}</span>
                          </div>

                          <div className="col-span-3">
                            {isBoolean(feature.growth) ? (
                              <div className="w-6 h-6 text-green-600">
                                {feature.growth ? <CheckIcon /> : null}
                              </div>
                            ) : (
                              feature.growth
                            )}
                          </div>

                          <div
                            className={`col-span-3 ${
                              feature.clickable ? "text-accent underline" : ""
                            }`}
                            onClick={feature.clickable ? toggleDemoForm : null}
                          >
                            {isBoolean(feature.enterprise) ? (
                              <div className="w-6 h-6 text-accent ">
                                {feature.enterprise ? <CheckIcon /> : null}
                              </div>
                            ) : (
                              feature.enterprise
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Testimonial
        quote="Constant innovation in areas like dialer solution and crm integration has been a game-changing experience for us to serve our most valuable customers."
        personName="Deepak Bisht"
        personDesignation="IT Head at Hear.com"
        companyLogo={
          <Image src="/logos/hear.svg" width="200px" height="56px" alt="Hear" />
        }
        personAvatar={
          <Image
            src="/people/deepak.jpg"
            width="64px"
            height="64px"
            objectFit="cover"
            className="rounded-full overflow-hidden"
            alt="Deepak Bisht"
          />
        }
      />

      <Banner bannerAction={toggleDemoForm} />
    </>
  );
}
