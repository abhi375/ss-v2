import ImageView from "@/components/ImageView";

export default function LogoWall({ backgroundClass, singleColumn }) {
  return (
    <section
      className={`px-12 py-8 ${
        backgroundClass ? backgroundClass : "bg-gray-50"
      }`}
    >
      <div
        className={`max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 ${
          singleColumn ? "lg:grid-cols-8" : "lg:grid-cols-4"
        } gap-12  md:gap-8 items-center`}
      >
        <ImageView
          alt="Samespace Customer"
          src="/logos/uhc.svg"
          width="100%"
          height="40px"
        />
        <ImageView
          alt="Samespace Customer"
          src="/logos/avis.svg"
          width="100%"
          height="32px"
        />
        <ImageView
          alt="Samespace Customer"
          src="/logos/hcl.svg"
          width="100%"
          height="28px"
        />
        <ImageView
          alt="Samespace Customer"
          src="/logos/urban.svg"
          width="100%"
          height="32px"
        />
        <ImageView
          alt="Samespace Customer"
          src="/logos/homecredit.svg"
          width="100%"
          height="36px"
        />
        <ImageView
          alt="Samespace Customer"
          src="/logos/hear.svg"
          width="100%"
          height="44px"
        />
        <ImageView
          alt="Samespace Customer"
          src="/logos/gojek.svg"
          width="100%"
          height="32px"
        />
        <ImageView
          alt="Samespace Customer"
          src="/logos/moka.svg"
          width="100%"
          height="24px"
        />
      </div>
    </section>
  );
}
