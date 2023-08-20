import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Personal {
  onNext: () => void;
  onPrevious: () => void;
}

const Step03: React.FC<Personal> = ({ onNext, onPrevious }) => {
  return (
    <div className="p-0 md:p-6 md:w-4/5 w-11/12">
      <h1 className="text-lg md:text-2xl font-semibold mb-1 text-primary" >Personal Information</h1>
      <p className="text-dark_text font-normal text-sm mb-6">
        Enter Your Personal Information
      </p>
      <form action="#">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-2 w-full md:w-2/4">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-primary"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="john"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
          <div className="mb-2w-full md:w-2/4">
            <label
              htmlFor="lasttname"
              className="block text-sm font-medium text-primary"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lasttname"
              id="lasttname"
              placeholder="doe"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-2 w-full md:w-2/4">
            <label
              htmlFor="mobile"
              className="block text-sm fofont-medium text-primary"
            >
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="758  345 0203"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
          <div className="mb-2 w-full md:w-2/4">
            <label
              htmlFor="code"
              className="block text-smfont-medium text-primary"
            >
              Pin Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="7489"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
        </div>

        <div className="mb-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-primary"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="address"
            id="address"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="landmark"
            className="block text-sm font-medium text-primary"
          >
            Landmark
          </label>
          <input
            type="text"
            name="landmark"
            placeholder="Nr hard rock cafe"
            id="landmark"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-2 w-full md:w-2/4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-primary"
            >
              City
            </label>
            <input
              type="text"
              name="citu"
              id="city"
              placeholder="California"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
          <div className="mb-2 w-full md:w-2/4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-primary"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="USA"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
        </div>

        <div className="flex justify-between gap-2 mt-4 text-sm text-text">
          <button
            type="submit"
            onClick={onPrevious}
            className=" flex justify-center items-center gap-3 w-32 bg-light_red text-dark_red font-normal py-3 shadow-md rounded-md tracking-[0.43px] "
          >
            <BsArrowLeft className=" text-lg font-bold " /> Previous
          </button>
          <button
            type="submit"
            onClick={onNext}
            className=" flex justify-center items-center gap-3 w-24 bg-secondary text-white font-normal py-3 rounded-md tracking-[0.43px]"
          >
            Next <BsArrowRight className=" text-lg font-bold " />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step03;
