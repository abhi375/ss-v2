import Image from "next/image";
import {
  BoltIcon,
  FaceIcon,
  DoubleTickIcon,
  ShieldIcon,
  LinkedInIcon,
  HoverArrowIcon,
} from "@/components/Icons";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function About({ leaders }) {
  return (
    <>
      <NextSeo title="About - Samespace" />
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto">
          <Image
            src="/company/fun.jpg"
            priority
            width="800px"
            height="400px"
            alt="Samespace"
          />
          <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">
            We Started in a Garage Too
          </h1>
          <p className="text-xl mb-8 leading-normal">
            From a tiny rented garage in Mumbai to headquarters around the
            world, Samespace founder Shailesh Tyagi has always had an ethical
            but ambitious outlook when it comes to business. Starting with
            Novanet, which quickly became one of the top VoIPs in the world, ST
            founded Samespace to directly address his Novanet’s clients needs:
            An affordable, full coverage contact center solution without
            inflated prices.
          </p>
          <p className="text-xl mb-8 leading-normal">
            To this day, Shailesh has a hands-on approach, working through the
            night to make sure Samespace does not compromise on quality. This
            “do it the best or don’t do it all” mentality is what keeps
            Samespace consistently growing no matter the twists and turns the
            world takes.
          </p>
          <p className="text-xl mb-8 leading-normal">
            When you enhance your contact center capabilities with Samespace,
            you ensure your company will remain agile and adaptive. No matter
            how distant we are or may become, Samespace works tirelessly to help
            you experience the New Together.
          </p>
        </div>
      </section>
      <section className="px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-[800px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold my-8">Beliefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="px-8 py-8 bg-white shadow-subtle rounded-lg">
              <div className="text-amber-600">
                <BoltIcon />
              </div>
              <p className="text-lg mt-4">
                Powerful software can be simple to deploy and use.
              </p>
            </div>

            <div className="px-8 py-8 bg-white shadow-subtle rounded-lg">
              <div className="text-indigo-600">
                <FaceIcon />
              </div>
              <p className="text-lg mt-4">
                We’re always thinking about what’s next for our customers.
              </p>
            </div>

            <div className="px-8 py-8 bg-white shadow-subtle rounded-lg">
              <div className="text-accent">
                <DoubleTickIcon />
              </div>
              <p className="text-lg mt-4">
                Self-funded companies can do what’s right for customers.
              </p>
            </div>

            <div className="px-8 py-8 bg-white shadow-subtle rounded-lg">
              <div className="text-green-600">
                <ShieldIcon />
              </div>
              <p className="text-lg mt-4">
                We always respect our customer's data privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-12 py-20">
        <div className="max-w-[800px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold my-8">Leadership</h3>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            {leaders.map((leader) => {
              return (
                <div
                  className="bg-white rounded-lg overflow-hidden shadow-subtle p-8 relative grid place-items-center text-center"
                  key={leader.id}
                >
                  <Link href={`about/${leader.slug}`}>
                    <a>
                      <div
                        className={`w-[120px] h-[120px] bg-accent  rounded-full overflow-hidden ${
                          leader.id === 1
                            ? "bg-accent"
                            : leader.id === 2
                            ? "bg-green-600"
                            : leader.id === 3
                            ? "bg-yellow-600"
                            : "bg-[#007aff]"
                        }`}
                      >
                        <Image
                          width="120px"
                          height="120px"
                          src={leader.avatar}
                          alt={leader.name}
                        />
                      </div>
                    </a>
                  </Link>

                  <div className="mt-4 grid place-items-center">
                    <Link href={`about/${leader.slug}`}>
                      <a>
                        <div className="mb-4">
                          <p className="text-lg font-semibold">{leader.name}</p>
                          <p className="text-lg opacity-60 mt-1">
                            {leader.designation}
                          </p>
                        </div>
                      </a>
                    </Link>
                    <a
                      href={leader.linkedin}
                      className="relative z-10"
                      target="_blank"
                    >
                      <div className="w-10 h-10 grid  place-items-center bg-[#0077b5] rounded-full text-white transform scale-[0.8]">
                        <LinkedInIcon />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-[800px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold my-8">Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="relative ">
                <Image
                  width={400}
                  height={300}
                  src={"/company/place2.jpg"}
                  alt="US Office"
                />

                <div className="absolute top-0 left-0 text-[12px] font-semibold text-white bg-accent p-0.5">
                  Corporate Headquarters
                </div>
              </div>
              <div>
                <h4 className="mb-2 mt-4 text-xl font-semibold">Palo Alto</h4>
                <p className="text-lg opacity-60">
                  3101 Park Blvd, Palo Alto CA 94306, United States
                </p>
              </div>
            </div>

            <div>
              <Image
                width={400}
                height={300}
                src={"/company/place1.jpg"}
                alt="Mumbai Office"
              />
              <div className="order-2 lg:order-1">
                <h4 className="mb-2 mt-4 text-xl font-semibold">Mumbai</h4>
                <p className="text-lg opacity-60">
                  302 El Tara, Orchard Ave, Hiranandani Gardens, Powai Mumbai
                  400076
                </p>
              </div>
            </div>

            <div>
              <Image
                width={400}
                height={300}
                src={"/company/place3.jpg"}
                alt="Manila Office"
              />

              <div>
                <h4 className="mb-2 mt-4 text-xl font-semibold">Manila</h4>
                <p className="text-lg opacity-60">
                  1 Raffles Drive Makati Avenue, Makati City Philippines, 1224
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-12 py-12 bg-gradient bg-gradient-to-r from-[#0A2FB4] to-[#120078] text-white">
        <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-3xl font-semibold mb-4 md:mb-0">
            Join the Samespace Team
          </div>
          <Link href="/careers">
            <a className="px-5 py-2 rounded-full flex items-center justify-center font-semibold bg-white text-accent group">
              <span>See Open Roles</span>
              <HoverArrowIcon />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const leaders = getAllPosts(
    ["name", "slug", "designation", "avatar", "linkedin", "id"],
    "content/leadership"
  );

  return {
    props: { leaders },
  };
}
