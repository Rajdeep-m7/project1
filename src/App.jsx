// eslint-disable-next-line no-unused-vars
import { motion , AnimatePresence} from "framer-motion";
import { useState } from "react";

export default function App() {
  const people = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/men/67.jpg",
    "https://randomuser.me/api/portraits/women/21.jpg",
    "https://randomuser.me/api/portraits/men/9.jpg",
  ];

  const floatAnimation = {
    animate: { y: [0, -15, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };


  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <div className="relative font-sans overflow-x-hidden bg-[#f8f8f8]">
      {/* BACKGROUND BLOBS */}
      <div className="min-h-screen bg-[#ffffff] text-black relative overflow-hidden">
        {/* ================= NAVBAR ================= */}
        <nav className="flex justify-between items-center px-6 md:px-16 py-6 relative z-50">
          <h1 className="text-xl font-semibold cursor-pointer">Elementum</h1>

          <ul className="hidden md:flex gap-10 text-sm">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-gray-500 transition"
              >
                {item}
              </li>
            ))}
          </ul>

          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden"
              >
                {menuItems.map((item) => (
                  <div
                    key={item}
                    onClick={() => setOpen(false)}
                    className="text-lg cursor-pointer hover:text-gray-500 transition active:scale-95"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ================= BACKGROUND ELEMENTS ================= */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Purple Half Circle */}
          <motion.div
            className="absolute right-10 md:top-1/2 top-1/3 w-10 h-18 rotate-30 bg-purple-500 rounded-r-full -z-10"
            style={{
              transform: "translateY(-50%)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Left Side Lines */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 items-center gap-4 flex w-20 h-20">
            <svg
              width="73"
              height="366"
              viewBox="0 0 73 366"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812"
                stroke="#FF7171"
                strokeWidth="8"
              />
            </svg>
            <svg
              width="84"
              height="355"
              viewBox="0 0 84 355"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
                stroke="#0E0E0E"
                strokeWidth="8"
              />
            </svg>
          </div>
        </div>

        {/* ================= HERO ================= */}
        <div className="relative z-30 text-center px-6 md:px-20 mt-10 md:mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-medium leading-tight"
          >
            The thinkers and <br />
            doers were{" "}
            <span className="bg-pink-300 px-3 rounded-full">changing</span>
            <br />
            the <span className="bg-green-200 px-3 rounded-full">
              status
            </span>{" "}
            Quo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 max-w-xl mx-auto mt-6 text-sm md:text-base"
          >
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </motion.p>
        </div>

        {/* ================= FLOATING AVATARS ================= */}
        <div className="relative z-30 mt-16 flex justify-center items-center gap-2 lg:gap-8 flex-wrap px-6">
          {people.map((img, index) => (
            <motion.div
              key={index}
              {...floatAnimation}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden hover:scale-110 shadow-xl"
              style={{
                marginTop: index % 2 === 0 ? "0px" : "20px",
              }}
            >
              <img
                src={img}
                alt="person"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 1 */}

      <div className="bg-[#f7f7f7] py-16 md:py-20 px-6 md:px-16 relative overflow-hidden">
        {/* 🔴 BLUR RED BUBBLE (SECTION 1 CENTER) */}
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 bg-red-300 opacity-40 blur-3xl rounded-full z-0"></div>

        {/* ================= TOP SECTION ================= */}
        <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT TEXT */}
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl md:text-5xl leading-tight font-medium">
              <span className="relative inline-block">
                Tomorrow should
                <span className="absolute left-0 bottom-1 w-full h-0.5 bg-yellow-400"></span>
              </span>
              <br />
              be better than{" "}
              <span className="bg-green-200 px-2 rounded-full">today</span>
            </h1>

            <p className="text-gray-500 mt-4 text-sm md:text-base">
              We are a team of strategists, designers communicators,
              researchers. Together, we belive that progress only happens when
              you refuse to play things safe.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 mt-6 text-sm cursor-pointer">
              <span>Read more</span>

              <svg
                width="120"
                height="8"
                viewBox="0 0 145 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M144.354 4.03544C144.549 3.84018 144.549 3.52359 144.354 3.32833L141.172 0.146351C140.976 -0.0489113 140.66 -0.0489113 140.464 0.146351C140.269 0.341613 140.269 0.658195 140.464 0.853458L143.293 3.68188L140.464 6.51031C140.269 6.70557 140.269 7.02216 140.464 7.21742C140.66 7.41268 140.976 7.41268 141.172 7.21742L144.354 4.03544ZM0 3.68188V4.18188H144V3.68188V3.18188H0V3.68188Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* RED SHAPE */}
            <div className="absolute top-4 right-2 md:right-0 w-14 h-14 md:w-16 md:h-16 bg-red-400 rotate-12 -z-10"></div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* 🔺 TRIANGLE 1 */}
            <svg
              className="absolute -z-20 -top-6 -left-6 w-20 md:w-28"
              viewBox="0 0 238 201"
              fill="none"
            >
              <path d="M118.646 0L237.291 200.25H0L118.646 0Z" fill="#FF7171" />
            </svg>

            {/* 🔺 TRIANGLE 2 */}
            <svg
              className="absolute -bottom-6 right-4 md:right-10 w-20 md:w-28 rotate-12"
              viewBox="0 0 238 201"
              fill="none"
            >
              <path d="M118.646 0L237.291 200.25H0L118.646 0Z" fill="#FF7171" />
            </svg>
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl md:text-5xl leading-tight font-medium">
              <span className="bg-green-200 px-2 rounded-full">See</span> how we
              can
              <br />
              help you{" "}
              <span className="relative inline-block">
                progress
                <span className="absolute left-0 bottom-1 w-full h-0.5 bg-yellow-400"></span>
              </span>
            </h1>

            <p className="text-gray-500 mt-4 text-sm md:text-base">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 mt-6 text-sm cursor-pointer">
              <span>Read more</span>
              <svg
                width="120"
                height="8"
                viewBox="0 0 145 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M144.354 4.03544C144.549 3.84018 144.549 3.52359 144.354 3.32833L141.172 0.146351C140.976 -0.0489113 140.66 -0.0489113 140.464 0.146351C140.269 0.341613 140.269 0.658195 140.464 0.853458L143.293 3.68188L140.464 6.51031C140.269 6.70557 140.269 7.02216 140.464 7.21742C140.66 7.41268 140.976 7.41268 141.172 7.21742L144.354 4.03544ZM0 3.68188V4.18188H144V3.68188V3.18188H0V3.68188Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ================= CURVE LINE ================= */}
        <svg
          className=" hidden md:block absolute left-1/3 top-[58%] md:top-[45%] w-100 md:w-250"
          viewBox="0 0 400 200"
          fill="none"
        >
          <svg
            width="1483"
            height="654"
            viewBox="0 0 1483 654"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2_9)">
              <path
                d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
                stroke="#FF6D6D"
                strokeWidth="5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2_9"
                x="0"
                y="0"
                width="1502.99"
                height="653.604"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_9"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_9"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <path
            d="M0 100 C100 0, 300 200, 400 100"
            stroke="#ff6b6b"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* SERVICES */}
      <div className="font-satoshi bg-[#f7f7f7] px-6 md:px-16 py-20 relative">
        {/* TOP HEADING */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            What we <span className="bg-green-200 px-3 rounded-full">can</span>
            <br />
            <span className="relative inline-block">
              offer you!
              <span className="absolute left-0 bottom-1 w-full h-0.75 bg-yellow-400"></span>
            </span>
          </h1>

          {/* CURVE LINE RIGHT */}
          <svg
            className="absolute left-1/2 -top-10 w-100 md:w-180 rotate-12"
            viewBox="0 0 400 200"
            fill="none"
          >
            <path
              d="M0 120 C100 0, 300 200, 400 80"
              stroke="#ff6b6b"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        {/* LIST */}
        <div className="mt-12 border-t border-gray-300">
          {/* ITEM */}
          <div className="flex items-center justify-between py-6 border-b border-gray-300 hover:scale-103 transition-transform duration-200">
            <p className="text-sm text-gray-500 w-1/3">
              Office of multiple <br /> interest content
            </p>

            <h2 className="text-xl md:text-2xl font-medium w-1/2 text-center">
              Colaborative & partnership
            </h2>

            <span className="text-xl">→</span>
          </div>

          <div className="flex items-center justify-between py-6 border-b border-gray-300 hover:scale-103 transition-transform duration-200">
            <p className="text-sm text-gray-500 w-1/3">
              The hanger US Air force <br /> digital experimental
            </p>

            <h2 className="text-xl md:text-2xl font-medium w-1/2 text-center">
              We talk about our weight
            </h2>

            <span className="text-xl">→</span>
          </div>

          <div className="flex items-center justify-between py-6 border-b border-gray-300 hover:scale-103 transition-transform duration-200">
            <p className="text-sm text-gray-500 w-1/3">
              Delfa faucet content, <br /> social, digital
            </p>

            <h2 className="text-xl md:text-2xl font-medium w-1/2 text-center">
              Piloting digital confidence
            </h2>

            <span className="text-xl">→</span>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL */}

      <section className="relative bg-[#efefef] py-20 md:py-32 px-4 md:px-16 text-center overflow-hidden">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif leading-tight">
          <span className="bg-green-200 px-3 rounded-full">What</span> our
          customer <br />
          says <span className="underline decoration-yellow-400">About Us</span>
        </h2>

        {/* AVATARS CONTAINER */}
        <div className="hidden md:block">
          {/* Desktop layout (same as before) */}

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="absolute left-10 top-24 w-14 h-14 rounded-full hover:scale-110 transition-transform duration-200"
          />

          <img
            src="https://randomuser.me/api/portraits/men/65.jpg"
            className="absolute left-16 bottom-24 w-28 h-28 rounded-full hover:scale-110 transition-transform duration-200"
          />

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="absolute left-6 bottom-10 w-12 h-12 rounded-full hover:scale-110 transition-transform duration-200"
          />

          <img
            src="https://randomuser.me/api/portraits/men/12.jpg"
            className="absolute right-16 top-24 w-14 h-14 rounded-full hover:scale-110 transition-transform duration-200"
          />

          <img
            src="https://randomuser.me/api/portraits/women/28.jpg"
            className="absolute right-24 top-44 w-12 h-12 rounded-full hover:scale-110 transition-transform duration-200"
          />

          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            className="absolute right-10 bottom-10 w-36 h-36 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          />
        </div>

        {/* MOBILE AVATARS (Clean row instead of floating mess) */}
        <div className="flex md:hidden justify-center gap-3 mt-10 flex-wrap">
          {["men/32", "women/44", "men/65", "men/12", "women/28"].map(
            (img, i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/${img}.jpg`}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow hover:scale-105"
              />
            ),
          )}
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="mt-12 md:mt-20 max-w-xl md:max-w-2xl mx-auto bg-[#dfe7e2] rounded-2xl md:rounded-3xl px-6 md:px-10 py-10 md:py-14 relative">
          {/* TOP QUOTE */}
          <span className="absolute top-4 left-6 text-5xl md:text-7xl text-gray-300 leading-none">
            “
          </span>

          {/* TEXT */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center px-4 md:px-8">
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use
            technologies that the company hadn’t used, which have also proved to
            be easy to use and reliable.
          </p>

          {/* BOTTOM QUOTE */}
          <span className="absolute bottom-4 right-6 text-5xl md:text-7xl text-gray-300 leading-none">
            ”
          </span>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#cfe3d4] pt-24 pb-10 px-6 md:px-16 relative">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-semibold font-serif leading-tight">
            Subscribe to <br /> our newsletter
          </h2>

          <p className="text-gray-600 mt-4">
            To make your stay special and even more memorable
          </p>

          <button className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer">
            Subscribe Now
          </button>
        </div>

        {/* PURPLE SHAPE */}
        <motion.div
          className="absolute right-10 rotate-220 top-7 md:top-20 w-10 h-18 bg-purple-500 rounded-r-full"
          style={{
            transform: "translateY(-50%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* LINE */}
        <div className="border-t border-gray-400 mt-20"></div>

        {/* FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Terms & Policies</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>1498w Fulton ste, STE 2D Chicago, IL 63867</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-gray-600 mt-16">
          ©2023 Elementum. All rights reserved
        </p>
      </section>
    </div>
  );
}
