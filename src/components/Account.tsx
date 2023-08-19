import React from "react";
import Link from "next/link";
import { BiLogoFacebook, BiLogoGoogle } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

interface Account {
  onNext: () => void;
}

const Step01: React.FC<Account> = ({ onNext }) => {
  return (
    <div className="p-6 w-3/5">
      <h1 className="text-2xl font-semibold mb-4">Adventure starts here 🚀</h1>
      <p className="text-text font-normal text-sm mb-6">
        Make your app management easy and fun!
      </p>
      <form action="#">
        <div className="mb-2">
          <label htmlFor="name" className="block text-sm font-normal text-text">
            Username
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="john.doe"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="john.doe@gmail.com"
            id="email"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="············"
            id="password"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>

        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="mr-2 border rounded focus:ring focus:ring-indigo-200"
          />
          <label htmlFor="checkbox" className="text-sm text-gray-700">
            I agree to
            <Link href="#" className=" text-secondary ml-1 ">
              privacy policy & terms
            </Link>
          </label>
        </div>

        <button
          type="submit"
          onClick={onNext}
          className="w-full bg-secondary text-white py-3 shadow-md rounded-md "
        >
          Sign up
        </button>

        <div className="flex gap-2 mt-4 text-sm text-text">
          <p className="text-sm">Already have an account? </p>
          <Link href="/login" className="text-secondary font-medium text-sm">
            Sign in instead
          </Link>
        </div>
      </form>

      <div className="flex flex-col justify-center items-center mt-3">
        <p className="text-center p-2 text-sm -mb-5 z-10 bg-white">OR</p>
        <hr className="w-full border-t-2" />
      </div>

      <div className="flex mt-10 items-center justify-center gap-3">
        <Link
          href="#"
          className="bg-light_grey w-38 h-38 text-center p-2 rounded  "
        >
          <BiLogoFacebook className="text-lg text-dark_grey" />
        </Link>
        <Link
          href="#"
          className="bg-light_blue w-38 h-38 text-center p-2 rounded  "
        >
          <AiOutlineTwitter className="text-lg text-dark_blue" />
        </Link>
        <Link
          href="#"
          className="bg-light_red w-38 h-38 text-center p-2 rounded  "
        >
          <BiLogoGoogle className="text-lg text-dark_red" />
        </Link>
      </div>
    </div>
  );
};

export default Step01;