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
          : "bg-gradient bg-gradient-to-r from-accent to-[#0052cc]"
      } ${foregroundClass ? foregroundClass : "text-white"}`}
    >
      <div className="max-w-screen-xl relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between">
        <h4 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-0">
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
