import Banner from "@/components/Banner";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import pricingStructure from "@/lib/pricingStructure";
import { CheckIcon } from "@/components/Icons";
import Button from "@/components/Button";

export default function PricingPage({ toggleDemoForm }) {
  const isBoolean = (val) => "boolean" === typeof val;

  return (
    <>
      <section className="px-12 py-8 bg-gray-50 sticky top-16 z-10">
        <div className="max-w-screen-lg mx-auto grid grid-cols-10 gap-6">
          <div className="col-span-4">
            <h1 className="text-3xl font-extrabold">
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
            <div className="text-xl font-semibold text-accent">Enterprise</div>
            <div className="mt-2">
              <Button
                onClick={toggleDemoForm}
                title="Get a quote"
                size="large"
                fullWidth
              />
            </div>
            <div className="opacity-50 mt-2">Starting at 100 users.</div>
          </div>
        </div>
      </section>
      <section className="pt-16 px-8">
        <div className="max-w-screen-lg mx-auto">
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
                          data-tip={feature.description && feature.description}
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
