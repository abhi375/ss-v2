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
        <h1 className="text-6xl font-extrabold w-4/6 mx-auto">
          {headline.map((heading, index) => {
            return <span key={index}>{heading}</span>;
          })}
        </h1>

        {copy.map((para, index) => {
          return (
            <p
              className={`text-2xl w-3/5 mx-auto mt-8 ${
                callToActions ? "mb-8" : ""
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
      <div className="w-full grid grid-cols-2 gap-20 items-center">
        <div className={`${showMediaFirst ? "order-2" : "order-1"}`}>
          {hero ? (
            <h1 className="text-4xl mb-6 font-extrabold">
              {headline.map((heading, index) => {
                return (
                  <span className="block" key={index}>
                    {heading}
                  </span>
                );
              })}
            </h1>
          ) : (
            <h3 className="text-4xl mb-6 font-extrabold">
              {headline.map((heading, index) => {
                return (
                  <span className="block" key={index}>
                    {heading}
                  </span>
                );
              })}
            </h3>
          )}

          {copy.map((para, index) => {
            return (
              <p
                className={`text-2xl ${callToActions ? "mb-6" : ""}`}
                key={index}
              >
                <span className="block mt-6">{para}</span>
              </p>
            );
          })}
          {callToActions && callToActions}
        </div>
        <div
          className={`w-full relative pt-[100%] ${
            showMediaFirst ? "order-1" : "order-2"
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`${horizontalPadding ? horizontalPadding : "px-12"} ${
        verticalPadding ? verticalPadding : "py-16"
      } ${backgroundClass ? backgroundClass : "bg-white"} ${
        foregroundClass ? foregroundClass : "text-black"
      }`}
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
