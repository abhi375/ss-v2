import Button from "./Button";

export default function Banner({
  title,
  backgroundClass,
  foregroundClass,
  bannerAction,
}) {
  return (
    <section
      className={`px-6 lg:px-12 py-12 ${
        backgroundClass ? backgroundClass : "bg-accent"
      } ${foregroundClass ? foregroundClass : "text-white"}`}
    >
      <div className="max-w-screen-xl mx-auto grid place-items-center">
        <h4 className="text-2xl md:text-3xl mb-6 text-center">
          {title ? title : "Would you like to see samespace in action?"}
        </h4>
        <Button
          title="Get a demo"
          backgroundClass="bg-white"
          foregroundClass="text-black"
          onClick={bannerAction && bannerAction}
        />
      </div>
    </section>
  );
}
