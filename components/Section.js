export default function Section({
  headline,
  copy,
  columns,
  textAlignment,
  callToActions,
  horizontalPadding,
  verticalPadding,
  showMediaFirst,
  hero,
  backgroundClass,
  foregroundClass,
  media,
}) {
  const OneColumnLayout = () => {
    return (
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold w-full md:w-4/6 mx-auto">
          {headline.map((heading, index) => {
            return <span key={index}>{heading}</span>;
          })}
        </h1>

        {copy.map((para, index) => {
          return (
            <p
              className={`text-2xl w-full md:w-3/5 mx-auto mt-6 ${
                callToActions ? "mb-6" : ""
              }`}
              key={index}
            >
              {para}
            </p>
          );
        })}
        {callToActions && callToActions}
        {media && media}
      </div>
    );
  };

  const TwoColumnLayout = () => {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className={`${showMediaFirst ? "lg:order-2" : "order-1"}`}>
          {hero ? (
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-extrabold">
              {headline.map((heading, index) => {
                return (
                  <span className="inline sm:block" key={index}>
                    {heading}
                  </span>
                );
              })}
            </h1>
          ) : (
            <h3 className="text-3xl lg:text-4xl mb-6 font-extrabold">
              {headline.map((heading, index) => {
                return (
                  <span className="inline sm:block" key={index}>
                    {heading}
                  </span>
                );
              })}
            </h3>
          )}

          {copy.map((para, index) => {
            return (
              <p
                className={`text-xl md:text-2xl leading-normal ${
                  callToActions ? "mb-8" : ""
                }`}
                key={index}
              >
                <span className="block mt-6">{para}</span>
              </p>
            );
          })}
          {callToActions && callToActions}
        </div>
        {media ? (
          <div
            className={`grid place-items-center ${
              showMediaFirst ? "lg:order-1" : "order-2"
            }`}
          >
            {media}
          </div>
        ) : (
          <div
            className={`w-full relative pt-[100%] ${
              showMediaFirst ? "lg:order-1" : "order-2"
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-5"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className={`${
        horizontalPadding ? horizontalPadding : "px-6 sm:px-10 lg:px-12"
      } ${verticalPadding ? verticalPadding : "py-16"} ${
        backgroundClass ? backgroundClass : "bg-white"
      } ${foregroundClass ? foregroundClass : "text-black"}`}
    >
      <div
        className={`max-w-screen-xl mx-auto ${
          textAlignment === "center" ? "text-center" : "text-left"
        }`}
      >
        {columns === "one" ? <OneColumnLayout /> : <TwoColumnLayout />}
      </div>
    </section>
  );
}
