import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Personal {
  onNext: () => void;
  onPrevious: () => void;
}

const Step03: React.FC<Personal> = ({ onNext, onPrevious }) => {
  return (
    <div className="p-6 w-4/5">
      <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>
      <p className="text-text font-normal text-sm mb-6">
        Enter Your Personal Information
      </p>
      <form action="#">
        <div className="flex gap-2">
          <div className="mb-2 w-2/4">
            <label
              htmlFor="firstname"
              className="block text-sm font-normal text-text"
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
          <div className="mb-2 w-2/4">
            <label
              htmlFor="lasttname"
              className="block text-sm font-normal text-text"
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

        <div className="flex gap-2">
          <div className="mb-2 w-2/4">
            <label
              htmlFor="mobile"
              className="block text-sm font-normal text-text"
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
          <div className="mb-2 w-2/4">
            <label
              htmlFor="code"
              className="block text-sm font-normal text-text"
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
            className="block text-sm font-medium text-gray-700"
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
            className="block text-sm font-medium text-gray-700"
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

        <div className="flex gap-2">
          <div className="mb-2 w-2/4">
            <label
              htmlFor="city"
              className="block text-sm font-normal text-text"
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
          <div className="mb-2 w-2/4">
            <label
              htmlFor="country"
              className="block text-sm font-normal text-text"
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
            className=" flex justify-center items-center gap-3 w-40 bg-light_red text-dark_red font-normal py-3 shadow-md rounded-md "
          >
            <BsArrowLeft className=" text-lg font-bold " /> Previous
          </button>
          <button
            type="submit"
            onClick={onNext}
            className=" flex justify-center items-center gap-3 w-40 bg-secondary text-white font-normal py-3 rounded-md "
          >
            Next <BsArrowRight className=" text-lg font-bold " />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step03;
