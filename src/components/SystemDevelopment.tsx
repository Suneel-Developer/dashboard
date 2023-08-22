import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface SystemDevelopment {
  onNext: () => void;
  onPrevious: () => void;
}

const Step01: React.FC<SystemDevelopment> = ({ onNext }) => {
  return (
    <div className="p-0 lg:p-6 md:w-3/5 w-11/12">
      <h1 className="text-2xl font-semibold mb-5">System Development</h1>

      <form action="#">
        <div>
          <label
            htmlFor="cloud sass"
            className="block text-lg font-medium mb-2 text-primary"
          >
            Cloud SaaS
          </label>
          <div className="flex gap-5 ">
            <label htmlFor="azure" className="flex items-center space-x-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <span className=" font-medium text-sm text-primary">Azure</span>
            </label>
            <label htmlFor="aws" className="flex items-center space-x-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className=" font-medium text-sm text-primary">AWS</span>
            </label>
          </div>
        </div>
        <div className="my-5">
          <label
            htmlFor="on premises"
            className="block text-lg font-medium mb-2 text-primary"
          >
            On-premises
          </label>
          <div className="flex gap-5 ">
            <label
              htmlFor="local active directory"
              className="flex items-center space-x-2"
            >
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <span className=" font-medium text-sm text-primary">
                Local Active Directory
              </span>
            </label>
            <label htmlFor="database" className="flex items-center space-x-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className=" font-medium text-sm text-primary">
                Database
              </span>
            </label>
          </div>
        </div>
      </form>

      <div className="flex justify-end gap-2 mt-4 text-sm text-text">
        <button
          type="submit"
          onClick={onNext}
          className=" flex justify-center items-center gap-3 w-24 bg-secondary text-white font-normal py-3 rounded-md "
        >
          Next <BsArrowRight className=" text-lg font-bold " />
        </button>
      </div>
    </div>
  );
};

export default Step01;
