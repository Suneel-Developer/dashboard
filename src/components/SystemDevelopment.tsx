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
                checked
                type="radio"
                id="azure"
                name="option1"
                className="w-5 h-5"
              />
              <span className=" font-medium text-sm text-primary">Azure</span>
            </label>
            <label htmlFor="aws" className="flex items-center space-x-2">
              <input type="radio" id="aws" name="option1" className="w-5 h-5" />
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
            <label htmlFor="local active directory" className="flex items-center space-x-2">
              <input
                checked
                type="radio"
                name="option2"
                className="w-5 h-5"
          
              />
              <span className=" font-medium text-sm text-primary">Local Active Directory</span>
            </label>
            <label htmlFor="database" className="flex items-center space-x-2">
              <input type="radio" name="option2" className="w-5 h-5" />
              <span className=" font-medium text-sm text-primary">Database</span>
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
