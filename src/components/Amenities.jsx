import React from "react";

const Amenities = () => {
  return (
    <div>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer object-cover">
            <img
              className="object-covers"
              alt="sdsa"
              src="https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg"
              height="100%"
              width="100%"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer object-cover">
            <img
              className="object-covers"
              alt="sdsa"
              src="https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg"
              height="100%"
              width="100%"
            />
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/BALI/WHAT-S-ON/AT-THE-RESORT/Celebrating-life-s-moments.jpg/jcr%3Acontent")`,
            }}
          >
            <div className="mt-20">
              <span className="text-xl">Moonlanding - </span>
              <span className="font-bold text-xl">Neil Armstrong</span>
            </div>
            <div className="mt-16 flex justify-between ">
              <span className="p-3 pl-0 font-bold">Travel Guide</span>
            </div>
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/88215---the-temple-of-the-mountain-valley---pura-g/format-2560x1600-88215/jcr%3Acontent")`,
            }}
          >
            <div className="mt-20">
              <span className="text-xl">Moonlanding - </span>
              <span className="font-bold text-xl">Neil Armstrong</span>
            </div>
            <div className="mt-16 flex justify-between ">
              <span className="p-3 pl-0 font-bold">Travel Guide</span>
            </div>
          </article>

          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer object-cover">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://static.toiimg.com/photo/54520519.cms"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer object-cover">
            <img
              className="object-covers"
              alt="sdsa"
              src="https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg"
              height="100%"
              width="100%"
            />
          </article>
        </section>
      </section>
    </div>
  );
};

export default Amenities;
