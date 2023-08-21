import React from "react";
import Link from "next/link";
import { BiLogoFacebook, BiLogoGoogle } from "react-icons/bi";
import { AiOutlineTwitter } from 'react-icons/ai';

interface Company  {
  onNext: () => void;
}

const Step01: React.FC<Company > = ({ onNext }) => {
  return (
    <div className="p-0 lg:p-6 md:w-3/5 w-11/12">
      <h1 className="text-2xl font-semibold mb-2">Adventure starts here 🚀</h1>
      <p className="text-dark_text font-normal text-sm m-0 mb-2">
        Make your app management easy and fun!
      </p>
      <form action="#">
       <div  className="mb-2 flex flex-col md:flex-row md:items-center gap-2">

        <div className="flex-1">
          <label htmlFor="companyname" className="block text-sm font-normal text-text">
           Company Name
          </label>
          <input
            type="text"
            name="companyname"
            id="companyname"
            placeholder="Company Name"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700"
          >
            Industry
          </label>
          <input
            type="text"
            name="industry"
            placeholder="Industry"
            id="industry"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
        </div>

        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="mr-2 border rounded focus:ring focus:ring-indigo-200"
          />
          <label htmlFor="checkbox" className="text-sm text-gray-700">
          Company industry is others
          </label>
        </div>

        <div className="mb-2">
          <label
            htmlFor="headquarters"
            className="block text-sm font-medium text-gray-700"
          >
            Company Head quarters
          </label>
          <input
            type="text"
            name="headquarters"
            placeholder="Company Head quarters"
            id="headquarters"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address / Building #
          </label>
          <input
            type="text"
            name="address"
            placeholder="address"
            id="address"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
       <div  className="mb-2 flex flex-col md:flex-row md:items-center gap-2">

        <div className="flex-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            id="city"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            id="country"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
        </div>
       <div  className="mb-2 flex flex-col md:flex-row md:items-center gap-2">

       <div className="flex-1">
          <label 
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip code
          </label>
          <input
            type="text"
            name="zipCode"
            placeholder="Zip code"
            id="zipCode"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            placeholder="State"
            id="state"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>
       </div>
        <div className="mb-2">
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <input
            type="text"
            name="website"
            placeholder="Website"
            id="website"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      
        <button
          type="submit"
          onClick={onNext}
          className="w-full bg-secondary text-white py-3 shadow-md rounded-md "
        >
          Sign up
        </button>

        <div className="flex gap-2 mt-3 text-sm text-text">
          <p className="text-sm">Already have an account? </p>
          <Link href="/login" className="text-secondary font-medium text-sm">
            Sign in instead
          </Link>
        </div>
      </form>

      <div className="flex flex-col justify-center items-center mt-1">
        <p className="text-center p-2 text-sm -mb-5 z-10 bg-white">OR</p>
        <hr className="w-full border-t-2" />
      </div>

      <div className="flex mt-5 items-center justify-center gap-3">
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
