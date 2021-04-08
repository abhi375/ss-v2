export default function Testimonial({
  quote,
  personName,
  personDesignation,
  companyLogo,
  personAvatar,
}) {
  return (
    <section className="px-6 lg:px-12 py-20 border-t border-solid border-black border-opacity-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full md:w-4/6 mx-auto text-center grid grid-cols-1 place-items-center">
          {companyLogo && <div className="mb-6">{companyLogo}</div>}
          <h3 className="text-2xl lg:text-3xl mb-8 italic">{quote}</h3>
          <div>
            {personAvatar && <div className="mb-4">{personAvatar}</div>}
            <p className="text-lg md:text-xl">{personName}</p>
            <p className="text-lg md:text-xl opacity-60 mt-2">
              {personDesignation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
