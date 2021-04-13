import Button from "./Button";

export default function Banner({
  title,
  backgroundClass,
  foregroundClass,
  bannerAction,
}) {
  return (
    <section
      className={`px-6 sm:px-10 lg:px-12 py-12 relative ${
        backgroundClass
          ? backgroundClass
          : "bg-gradient bg-gradient-to-r bg-accent to-[#0A2FB4]"
      } ${foregroundClass ? foregroundClass : "text-white"}`}
    >
      <div className="max-w-screen-xl relative z-10 mx-auto grid place-items-center">
        <h4 className="text-2xl md:text-3xl mb-6 text-center">
          {title ? title : "Enhance your CRM and increase productivity."}
        </h4>
        <Button
          title="Get Demo"
          backgroundClass="bg-white"
          foregroundClass="text-accent"
          size="large"
          onClick={bannerAction && bannerAction}
        />
      </div>
    </section>
  );
}
