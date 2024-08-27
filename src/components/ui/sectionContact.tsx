import React from "react";

const SectionContact = () => {
  return (
    <div
      id="contact"
      className="flex max-sm:flex-col mt-14 sm:justify-center sm:gap-10 sm:mt-20 sm:px-44"
    >
      <div className="sm:w-1/2 px-8">
        <div className="text-4xl sm:text-5xl font-semibold text-center text-gray-800">
          Partner With Us?
        </div>
        <div className="mx-auto h-[2px] sm:h-1 w-48 bg-primaryColor mt-2 mb-7" />
        <p>
          AIESEC is a global platform for young people to explore and develop
          their leadership potential. We are a non-political, independent,
          not-for-profit organization run by students and recent graduates of
          institutions of higher education.
        </p>
      </div>

      <div className="sm:w-1/2 mt-6">
        <form
          action="https://getform.io/f/zazkpxob"
          method="POST"
          encType="multipart/form-data"
          target="_blank"
        >
          <div className="w-full lg:w-full">
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
                className="w-full bg-slate-200 text-slate-700 p-2 rounded-md focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
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
                className="w-full bg-slate-200 text-slate-700 p-2 rounded-md focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
              ></input>
            </div>
            <div className="w-full px-8 mb-4">
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
                className="w-full bg-slate-200 text-slate-700 p-3 rounded-md focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main h-44"
              ></textarea>
            </div>
            <div className="w-full px-8 text-center">
              <button className="bg-primaryColor text-base font-semibold text-white bg-green-main py-1 px-9 rounded-md w-full sm:w-32 lg:w-60 xl:w-72 hover:opacity-80 hover:shadow-lg transition duration-500">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionContact;
