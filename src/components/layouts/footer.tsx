import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-gray-900 p-8 sm:p-12 mt-10 sm:mt-20">
      <div className="sm:grid sm:grid-cols-3 sm:gap-10 sm:px-28">
        {/* aisec logo & description */}
        <div>
          <div>
            <Image
              src={"/aiesecblue.webp"}
              alt="logo"
              width={250}
              height={4000}
            />
          </div>
          <div className="flex">
            <div className="h-auto w-3 bg-white ml-2 mt-6"></div>
            <div className="ml-3 text-sm sm:text-base">
              <p className="mt-5 text-white leading-relaxed">
                AIESEC is a non-governmental not-for-profit organization in
                consultative status with the United Nations Economic and Social
                Council (ECOSOC), affiliated with the UN DPI, member of ICMYO,
                and is recognize by UNESCO.
              </p>
              <p className="mt-5 text-white leading-relaxed">
                AIESEC International Inc. is registered as a Not-for-profit
                Organization under the Canadian Not-for-profit Corporations
                Act-2018-02-08, Corporation Number 1055154-and Quebec Business
                Number (NEQ) 457178 in Montreal, Quebec, Canada.
              </p>
            </div>
          </div>
        </div>

        {/* journey */}
        <div className="max-sm:mt-8 max-sm:ml-2 sm:ml-24 sm:mt-3">
          <div className="text-lg text color sm:text-xl text-primaryColor font-bold">
            Our Journey
          </div>
          <div className="ml-5 mt-2 text-base sm:text-lg font-semibold text-white">
            Categories
          </div>
          <div className="flex flex-col gap-2 text-white ml-10 mt-2">
            <Link href={"#"} className="hover:text-primaryColor">
              AIESEC Jouerney
            </Link>
            <Link href={"#"} className="hover:text-primaryColor">
              Career Tips
            </Link>
            <Link href={"#"} className="hover:text-primaryColor">
              Exchange Stories
            </Link>
            <Link href={"#"} className="hover:text-primaryColor">
              Leadership
            </Link>
            <Link href={"#"} className="hover:text-primaryColor">
              MC Stories
            </Link>
            <Link href={"#"} className="hover:text-primaryColor">
              Press Release
            </Link>
            <Link href={"#"} className="hover:text-primaryColor">
              Youth
            </Link>
          </div>
        </div>
        {/*sosial Media and office map */}
        <div className="max-sm:mt-8 sm:mt-3">
          {/* sosial media */}
          <div className="text-lg sm:text-xl font-bold text-primaryColor">
            Sosial Media
          </div>
          <div className="flex justify-items-start gap-4 items-center mt-3 sm:mt-5 text-white">
            <Link
              href="https://www.facebook.com/share/KsHtEPHV9sinkfAS/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-[#1877F2] border bg-white hover:opacity-80"
            >
              <svg
                role="img"
                width={30}
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/aiesecsurabaya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-white bg-gradient-to-r from-purple-600 to-red-500 hover:opacity-80"
            >
              <svg
                role="img"
                width={25}
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </Link>
            <Link
              href="https://x.com/aiesecindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-white bg-black hover:opacity-80"
            >
              <svg
                role="img"
                width={25}
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
            <Link
              href="www.youtube.com/@TheAIESECSurabaya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-[#FF0000] bg-white hover:opacity-80"
            >
              <svg
                role="img"
                width={25}
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
          {/* map */}
          <div className="text-lg font-bold sm:text-xl text-primaryColor mt-10">
            AIESEC Surabaya Office
          </div>
          <div className="h-44 w-full bg-gray-200 mt-3 my-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.802079153403!2d112.76775459999999!3d-7.263351899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbac00b357f3%3A0xea1a2603c133b751!2sAIESEC%20Surabaya%20Office!5e0!3m2!1sid!2sid!4v1724330455386!5m2!1sid!2sid"
              style={{ border: 0 }}
              width={"100%"}
              height={"100%"}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
