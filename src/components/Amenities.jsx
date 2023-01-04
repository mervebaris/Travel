import React from "react";
import Manzara from "../assets/res1.jpg";
import Navbar from "./Navbar";

const Amenities = () => {
  return (
    <div className="w-full h-screen overflow-scroll">
      <Navbar />
      <div className="container mx-auto p-10 md:py-15 px-0 md:p-10 md:px-0">
        <p className="font-custom2 text-3xl md:text-3xl font-bold text-orange-900 text-center mb-8">
        WHAT'S ON IN BALI
        </p>
        <div className=" max-w-[100%] max-h-[50%] rounded-xl bg-center bg-cover transform duration-500 hover:-translate-y-1">
          <img src={Manzara} />
        </div>
        <div className="max-w-full m-auto px-4 mt-12 grid lg:grid-cols-1 gap-7 shadow">
            <p className="font-custom2 text-bold text-xl pt-2 text-orange-800  mb-10">
              Special occasions are all the more spectacular at Bulgari Resort
              Bali, which offers a unique private dining experience in the open
              air. Surrounded by the Resort’s lush flora and set beneath the
              infinity pool, the table features endless ocean views. The
              stunning scenery and intimate location give this exclusive
              experience the feel of one’s own private paradise.
            </p>
          </div>
      </div>
      <section className="container mx-auto p-10 md:py-5 px-0 md:p-10 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/RANFUSHI/2.jpg/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/LONDON/WHAT-S-ON/AT-THE-HOTEL/AtTheHotel_20DEF.zip/1.jpg/jcr%3Acontent"
            />
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/BALI/WHAT-S-ON/AT-THE-RESORT/April19/AKI_2841.jpg/jcr%3Acontent")`,
            }}
          >
            <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/82339---the-lempuyang-luhur-temple/format-2560x1600-82339/jcr%3Acontent")`,
            }}
          >
            <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://static.toiimg.com/photo/54520519.cms"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/BALI/WHAT-S-ON/AT-THE-RESORT/balinese-food-experience.jpg/jcr%3Acontent"
            />
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/85315---an-ancient-hindu-pilgrimage-destination--t/format-2560x1600-85315/jcr%3Acontent")`,
            }}
          >
            <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>
          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/85317---the-legacy-of-traditional-pottery/format-2560x1600-85317/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/85809---the-attractions-at-the-garuda-wisnu-kencan/format-2560x1600-85809/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/BALI/WHAT-S-ON/AT-THE-RESORT/new-experiences.jpg/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg"
            />
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/85801---the-grand-sleeping-buddha-of-vihara-dharma/format-2560x1600-85801/jcr%3Acontent")`,
            }}
          >
              <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>
          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/83295---the-temple-of-the-purifying-waters-of-tirt/format-2560x1600-83295/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full bg-gray-200 rounded-xl text-gray-600 transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/80231---a-day-trip-to-the-island-of-nusa-lembongan/format-2560x1600-80231/jcr%3Acontent"
            />
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/80227---bali%E2%80%99s-most-beautiful-temple-is-suspended-/format-2560x1600-80227/jcr%3Acontent")`,
            }}
          >
               <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>
          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/79293---the-taman-tirta-gangga---jewel-on-the-wate/format-2560x1600-79293/jcr%3Acontent")`,
            }}
          >
              <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/BALI/WHAT-S-ON/IN-BALI/shutterstock_1433767703.jpg/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/79949---the-last-paradise---the-dream-begins-in-th/format-2560x1600-79949/jcr%3Acontent"
            />
          </article>
          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/BALI/WHAT-S-ON/IN-BALI/May20IMGCut.zip/4.jpg/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/79301---like-sorcery.-the-irresistible-art-of-the-/format-2560x1600-79301/jcr%3Acontent"
            />
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/BALI/WHAT-S-ON/AT-THE-RESORT/FEBRUARY-2018/Devdan.jpg/jcr%3Acontent")`,
            }}
          >
            <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>
          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/88219---the-golden-age-of-art-and-culture---the-ku/format-2560x1600-88219/jcr%3Acontent")`,
            }}
          >
             <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/78961---the-besakih-temple%2C-the-mystic-heart-of-ba/format-2560x1600-78961/jcr%3Acontent"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/78965---when-nature-surpasses-fantasy---sekumpul-f/format-2560x1600-78965/jcr%3Acontent"
            />
          </article>
        

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://i.pinimg.com/564x/a0/86/37/a086370eacb14843e8c473141a9552f5.jpg"
            />
          </article>
          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://i.pinimg.com/564x/85/a3/e5/85a3e5b90c6d8387552c7caf901e55c0.jpg")`,
            }}
          >
             <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://i.pinimg.com/564x/cf/e1/e2/cfe1e203bb784f170929f563e154d2e2.jpg"
            />
          </article>
          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://images6.alphacoders.com/588/588754.jpg"
            />
          </article>

          <article className=" min-h-116 max-w-xl w-full rounded-xl transform duration-500 hover:-translate-y-1 cursor-pointer">
            <img
              className="object-cover w-full h-full"
              alt="sdsa"
              src="https://free4kwallpapers.com/uploads/originals/2021/03/05/a-comma-in-the-ocean--breakwater-on-nusa-dua-coast-bali-indonesia-wallpaper.jpg"
            />
          </article>

          <article
            className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/326/734/370/blurred-coral-diving-suits-island-wallpaper-preview.jpg")`,
            }}
          >
            <div className="mt-20">
              <span className="text-lg bg-orange-50 text-orange-800 p-2">Moonlanding - </span>
              <span className="font-bold text-lg bg-orange-50 text-orange-800 border-orange-800 p-2 ">Neil Armstrong</span>
            </div>
            <div className="mt-5 flex justify-between ">
              <span className="p-2 font-bold bg-orange-50 text-orange-800 border-orange-800 ">Travel Guide</span>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default Amenities;
