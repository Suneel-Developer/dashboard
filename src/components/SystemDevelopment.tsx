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
          <div className="mb-2">
            <label
              htmlFor="saas"
              className="block text-sm font-medium text-gray-700"
            >
              Cloud SaaS
            </label>
            <input
              type="text"
              name="saas"
              placeholder="Cloud SaaS"
              id="saas"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="premises"
              className="block text-sm font-medium text-gray-700"
            >
              On-premises
            </label>
            <input
              type="text"
              name="premises"
              placeholder="On-premises"
              id="premises"
              className="mt-1 p-2 w-full border rounded-md "
            />
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
