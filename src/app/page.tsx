import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="w-full flex justify-between items-center fixed p-5 border border-b-1 border-gray-300 h-28 z-50 bg-white top-0">
        <Link href={"/"} className="ml-5 cursor-pointer">
          <Image
            src="/aiesecblue.webp"
            alt="Vercel Logo"
            width={250}
            height={190}
            priority
          />
        </Link>
        <div className="flex gap-10 mr-12 cursor-pointer text-[#6d6e70] text-lg font-medium transation ease-in-out duration-100">
          <Link className="hover:text-primary  " href={"#programs"}>
            Our Programs
          </Link>
          <Link
            className="hover:text-primary transation ease-in-out duration-100"
            href={"#events"}
          >
            Our Events
          </Link>
          <Link
            className="hover:text-primary transation ease-in-out duration-100"
            href={"#blog"}
          >
            Blog
          </Link>
          <Link
            className="hover:text-primary transation ease-in-out duration-100"
            href={"#contact"}
          >
            Contact
          </Link>
          <div className="hover:text-primary transation ease-in-out duration-100">
            More
          </div>
        </div>
      </header>

      {/* Home */}
      <div className="flex justify-center mt-28">
        <div className="relative w-full h-[calc(100vh-7rem)] opacity-30">
          <Image
            src={"/blog.webp"}
            alt="blog"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="absolute font-sans top-1/3  left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto bg-primary flex justify-center items-center p-5 rounded-sm">
          <p className="text-white font-bold text-5xl">
            Welcome to AIESEC Surabaya
          </p>
        </div>
        <div className="absolute font-sans top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  justify-center items-center">
          <p className="text-[#1d2129] font-bold text-6xl text-center mt-5">
            Leadership is for
          </p>
          <p className="text-[#1d2129] font-bold text-6xl mt-5">
            every young person
          </p>
        </div>
        <div className="absolute font-sans top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  justify-center items-center">
          <p className="text-gray-700 font-bold text-xl text-center mt-3">
            Take part in one of our programs in the city of Surabaya. Start your
            leadership journey with AIESEC.
          </p>
        </div>
        <button className="absolute font-sans top-3/4  left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto bg-primary flex justify-center items-center py-2 px-3  text-white text-2xl font-semibold rounded-md mt-5">
          Let{"'"}s get started!
        </button>
      </div>
      {/* Our Programs */}
      <div id="programs">
        <div className="text-5xl font-bold text-center mt-10">Our Programs</div>
        <p className="text-2xl text-gray-700 mt-5 text-center">
          We aim to develop leadership qualities and capabilities in
        </p>
        <p className="text-2xl text-gray-700 mt-5 text-center">
          young people with these programs
        </p>
      </div>

      {/* programs internasional */}
      <div className="flex justify-center mt-20">
        <div className="text-3xl font-semibold text-center mt-9 w-[50%] text-gray-600">
          Our Internasional Programs
        </div>
        <div className="grid grid-cols-2 gap-5 px-56 mt-10 w-[50%]">
          <div className="bg-[#0cb9c1] h-80 w-96 flex justify-center items-center p-10">
            <Image
              src={"/globalTalent.png"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
          {/* <div className="bg-[#f48924]">
            <Image
              src={"/globalTeacher.png"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
          <div className="bg-[#037ef3]">
            <Image
              src={"/aiesecMember.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
          <div className="bg-[#f85a40]">
            <Image
              src={"/globalVolunteer.png"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div> */}
        </div>
      </div>

      {/* program local */}
      <div className="flex justify-center  mt-20">
        <div className="grid grid-cols-2 gap-5 px-56 mt-10 w-[50%]">
          <div className="bg-blue-500 h-80 w-96 flex justify-center items-center p-10">
            <Image
              src={"/aiesecFuture.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
          {/* <div className="bg-orange-400">
            <Image
              src={"/locaProject.png"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
          <div className="bg-blue-500">
            <Image
              src={"/localVolunteer.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div> */}
        </div>
        <div className="text-3xl font-semibold text-center mt-9 w-[50%] text-gray-600">
          Our Local Programs
        </div>
      </div>

      {/* our event */}
      <div id="events">
        <div className="text-gray-600 text-3xl font-semibold text-center mt-20">
          Our Events
        </div>
        <div className="grid grid-cols-2 gap-5 px-56 mt-14">
          <div className="bg-blue-500 flex justify-center items-center">
            <Image
              src={"/impactCircle.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
          <div className="bg-orange-400 flex justify-center items-center">
            <Image
              src={"/youthToday.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* blog */}
      <div id="blog" className="mt-20">
        <div className="text-3xl font-semibold text-center mt-9">Blog</div>
        <div className="flex justify-center mt-10">
          <Image src={"/blog.webp"} alt="blog" width={1200} height={500} />
        </div>
      </div>

      {/* Contact ? */}
      <div id="contact" className="flex justify-center gap-10 mt-20 px-44">
        <div className="w-1/2">
          <div className="text-3xl font-semibold text-center">
            Partner With Us?
          </div>
          <div className="h-1 w-48 bg-primary my-5" />
          <p>
            AIESEC is a global platform for young people to explore and develop
            their leadership potential. We are a non-political, independent,
            not-for-profit organization run by students and recent graduates of
            institutions of higher education.
          </p>
        </div>

        <div className="w-1/2">
          <form
            action="https://getform.io/f/zazkpxob"
            method="POST"
            encType="multipart/form-data"
            target="_blank"
          >
            <div className="w-full lg:full lg:mx-auto">
              <div className="w-full px-8 mb-3">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-green-main"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-200 text-slate-700 p-2 rounded-xl focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
                ></input>
              </div>
              <div className="w-full px-8 mb-3">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-green-main"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-200 text-slate-700 p-2 rounded-xl focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
                ></input>
              </div>
              <div className="w-full px-8 mb-6">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-green-main"
                >
                  Message
                </label>
                <textarea
                  typeof="text"
                  id="message"
                  name="message"
                  className="w-full bg-slate-200 text-slate-700 p-3 rounded-xl focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main h-44"
                ></textarea>
              </div>
              <div className="w-full text-center">
                <button className="bg-primary text-base font-semibold text-white bg-green-main py-1 px-9 rounded-full sm:w-32 lg:w-60 xl:w-72 hover:opacity-80 hover:shadow-lg transition duration-500">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* partner list */}
      <div className="mt-20">
        <div className="text-3xl font-semibold text-center mt-10">
          Out Partners
        </div>
        <div className="grid grid-cols-6 gap-3 mt-10 px-44 justify-center items-center">
          <Image src={"/goto.png"} alt="goto" width={100} height={100} />
          <Image src={"/indosatt.png"} alt="goto" width={100} height={100} />
          <Image src={"/bcaa.png"} alt="goto" width={100} height={100} />
          <Image src={"/permata.webp"} alt="goto" width={100} height={100} />
          <Image src={"/schoters.webp"} alt="goto" width={100} height={100} />
          <Image src={"/unilever.webp"} alt="goto" width={100} height={100} />
          <Image src={"/kraftHeinz.webp"} alt="goto" width={100} height={100} />
          <Image src={"/nestle.webp"} alt="goto" width={100} height={100} />
          <Image src={"/mondelez.webp"} alt="goto" width={100} height={100} />
          <Image src={"/danone.webp"} alt="goto" width={100} height={100} />
          <Image src={"/isnpigo.webp"} alt="goto" width={100} height={100} />
          <Image src={"/blibi.webp"} alt="goto" width={100} height={100} />
          <Image
            src={"/fourthValley.webp"}
            alt="goto"
            width={100}
            height={100}
          />
          <Image src={"/danamon.webp"} alt="goto" width={100} height={100} />
          <Image src={"/dbs.webp"} alt="goto" width={100} height={100} />
          <Image src={"/ecomatcher.webp"} alt="goto" width={100} height={100} />
          <Image src={"/paragon.webp"} alt="goto" width={100} height={100} />
          <Image src={"/goop.webp"} alt="goto" width={100} height={100} />
          <Image src={"/sasa.webp"} alt="goto" width={100} height={100} />
          <Image src={"/nabati.webp"} alt="goto" width={100} height={100} />
          <Image
            src={"/General_Electric.webp"}
            alt="goto"
            width={100}
            height={100}
          />
          <Image src={"/ef.webp"} alt="goto" width={100} height={100} />
          <Image
            src={"/commonwealth.png"}
            alt="goto"
            width={100}
            height={100}
          />
          <Image src={"/adb.webp"} alt="goto" width={100} height={100} />
          <Image src={"/telkomsel.webp"} alt="goto" width={100} height={100} />
          <Image src={"/shopee.webp"} alt="goto" width={100} height={100} />
        </div>
      </div>

      {/* footer */}
      <div className="flex bg-gray-900 p-10 mt-10">
        <div className="grid grid-cols-3 gap-10 px-28">
          {/* aisec logo */}
          <div>
            <div>
              <Image
                src={"/aiesecblue.webp"}
                alt="logo"
                width={400}
                height={400}
              />
            </div>
            <div className="flex">
              <div className="h-72 w-3 bg-white ml-3 mt-6"></div>
              <div className="ml-3">
                <p className="mt-5 text-white">
                  AIESEC is a non-governmental not-for-profit organization in
                  consultative status with the United Nations Economic and
                  Social Council (ECOSOC), affiliated with the UN DPI, member of
                  ICMYO, and is recognize by UNESCO.
                </p>
                <p className="mt-5 text-white">
                  AIESEC International Inc. is registered as a Not-for-profit
                  Organization under the Canadian Not-for-profit Corporations
                  Act-2018-02-08, Corporation Number 1055154-and Quebec Business
                  Number (NEQ) 457178 in Montreal, Quebec, Canada.
                </p>
              </div>
            </div>
          </div>
          {/* journey */}
          <div className="ml-24">
            <div className="text-2xl text-primary">Our Journey</div>
            <div className="ml-5 text-lg  text-white">Categories</div>
            <div className="flex flex-col text-white ml-10">
              <Link href={"#"}>AIESEC Jouerney</Link>
              <Link href={"#"}>Career Tips</Link>
              <Link href={"#"}>Exchange Stories</Link>
              <Link href={"#"}>Leadership</Link>
              <Link href={"#"}>MC Stories</Link>
              <Link href={"#"}>Press Release</Link>
              <Link href={"#"}>Youth</Link>
            </div>
          </div>
          {/*sosial Media and office map */}
          <div className="">
            <div className="text-xl text-primary">Sosial Media</div>
            <div className="flex items-center  mt-5 text-white">
              <Link
                href="https://www.facebook.com/ngga.rengga.75?mibextid=LQQJ4D"
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
                href="https://www.instagram.com/rengga.rs"
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
                href="https://x.com/renggarendi"
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
                href="https://youtube.com/@renggars?si=GQvlFfwyYc_EZaZU"
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
            <div className="text-2xl text-primary mt-10">
              AIESEC Surabaya Office
            </div>
            <div className="h-20 w-36 bg-gray-200 mt-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
