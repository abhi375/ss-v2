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
  patternChild,
}) {
  const OneColumnLayout = () => {
    return (
      <div className="grid grid-cols-1 place-items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black w-full md:w-4/6 mx-auto">
          {headline.map((heading, index) => {
            return (
              <span className="inline md:block" key={index}>
                {heading}
              </span>
            );
          })}
        </h1>

        {copy.map((para, index) => {
          return (
            <p
              className={`text-xl md:text-2xl leading-normal w-full md:w-3/5 mx-auto mt-6 ${
                callToActions ? "mb-8" : ""
              }`}
              key={index}
            >
              {para}
            </p>
          );
        })}
        {callToActions && callToActions}
        <div>{media && <div className="mt-6">{media}</div>}</div>
      </div>
    );
  };

  const TwoColumnLayout = () => {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className={`${showMediaFirst ? "lg:order-2" : "order-1"}`}>
          {hero ? (
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-black">
              {headline.map((heading, index) => {
                return (
                  <span className="inline sm:block" key={index}>
                    {heading}
                  </span>
                );
              })}
            </h1>
          ) : (
            <h3 className="text-3xl lg:text-4xl mb-6 font-black">
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
      className={`relative ${
        horizontalPadding ? horizontalPadding : "px-6 sm:px-10 lg:px-12"
      } ${verticalPadding ? verticalPadding : "py-16"} ${
        backgroundClass ? backgroundClass : "bg-white"
      } ${foregroundClass ? foregroundClass : "text-black"}`}
    >
      {patternChild && patternChild}
      <div
        className={`max-w-screen-xl relative z-10 mx-auto ${
          textAlignment === "center" ? "text-center" : "text-left"
        }`}
      >
        {columns === "one" ? <OneColumnLayout /> : <TwoColumnLayout />}
      </div>
    </section>
  );
}
