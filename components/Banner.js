import Image from "next/image";
import Button from "./Button";

export default function Banner({
  title,
  backgroundClass,
  foregroundClass,
  bannerAction,
}) {
  return (
    <section
      className={`px-6 sm:px-10 lg:px-12 py-20 relative ${
        backgroundClass ? backgroundClass : "bg-accent"
      } ${foregroundClass ? foregroundClass : "text-white"}`}
    >
      <div className="max-w-screen-xl relative z-10 mx-auto grid place-items-center">
        <h4 className="text-2xl md:text-4xl mb-6 text-center">
          {title ? title : "Would you like to see samespace in action?"}
        </h4>
        <Button
          title="Get a demo"
          backgroundClass="bg-white"
          foregroundClass="text-accent"
          size="large"
          onClick={bannerAction && bannerAction}
        />
      </div>
      <Image
        src={"/gradient-bg.png"}
        layout="fill"
        className="absolute inset-0 z-0"
      />
    </section>
  );
}
