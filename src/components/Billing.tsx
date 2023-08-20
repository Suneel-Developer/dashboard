import React from "react";
import { BsArrowLeft } from "react-icons/bs";

interface Billing {
  onFinish: () => void;
  onPrevious: () => void;
}

const Step04: React.FC<Billing> = ({ onFinish, onPrevious }) => {
  return (
    <div className="p-6 md:w-4/5 w-11/12">
      <h1 className="text-2xl font-semibold text-primary">Select Plan</h1>
      <p className="text-dark_text font-normal text-sm mb-2">
        Select plan as per your requirement
      </p>

      <div className="flex justify-between gap-2 my-3 ">
        <div className=" border border-secondary rounded text-center p-3">
          <h2 className="text-xl font-semibold text-primary">Basic</h2>
          <p className="font-normal text-sm leading-6 text-dark_text">
            A simple start for start-ups & Students
          </p>
          <div className="flex justify-center align-middle gap-2 my-1">
            <span className="text-secondary">$</span>
            <h3 className=" text-3xl font-semibold text-secondary ">0</h3>
            <p className=" flex font-normal flex-col justify-between text-sm items-start text-dark_text	">
              <span>/</span> month
            </p>
          </div>
          <input
            type="radio"
            name="radio"
            checked
            className="border-success border-4"
          />
        </div>

        <div className=" border border-dark_text rounded text-center p-3">
          <h2 className="text-xl font-semibold text-primary">Standard</h2>
          <p className="font-normal text-sm leading-6 text-dark_text">
            For small to medium businesses
          </p>
          <div className="flex justify-center align-middle gap-2 my-1">
            <span className="text-secondary">$</span>
            <h3 className=" text-3xl font-semibold text-secondary ">99</h3>
            <p className=" flex font-normal flex-col justify-between text-sm items-start text-dark_text	">
              <span>/</span> month
            </p>
          </div>
          <input
            type="radio"
            name="radio"
            className="border-dark_text border-5 rounded-full"
          />
        </div>

        <div className=" border border-dark_text rounded text-center p-3">
          <h2 className="text-xl font-semibold text-primary">Enterprise</h2>
          <p className="font-normal text-sm leading-6 text-dark_text">
            Solution for enterprise & organizations
          </p>
          <div className="flex justify-center align-middle gap-2 my-1">
            <span className="text-secondary">$</span>
            <h3 className=" text-3xl font-semibold text-secondary ">499</h3>
            <p className=" flex font-normal justify-between text-sm items-end text-dark_text	">
              <span>/</span> Year
            </p>
          </div>
          <input
            type="radio"
            name="radio"
            className="border-dark_text border-5 rounded-full"
          />
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-1 mt-2 text-primary">Payment Information</h1>
      <p className="text-dark_text font-normal text-sm mb-6">
        Enter your card information
      </p>

      <form action="#">
        <div className="mb-2">
          <label
            htmlFor="card number"
            className="block text-sm font-medium text-primary"
          >
            Card Number
          </label>
          <input
            type="number"
            name="cardnumber"
            placeholder="7465 8374 5837 5067"
            id="cardnumber"
            className="mt-1 p-2 w-full border rounded-md "
          />
        </div>

        <div className="flex gap-2">
          <div className="mb-2 w-2/4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary"
            >
              Name on Card
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John.Doe"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
          <div className="flex gap-2 mb-2 w-2/4">
            <div className="w-2/4">
              <label
                htmlFor="expiry date"
                className="block text-sm font-medium text-primary"
              >
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                placeholder="MM/YY"
                className="mt-1 p-2 w-full border rounded-md "
              />
            </div>
            <div className="w-2/4">
              <label
                htmlFor="cvv code"
                className="block text-sm font-medium text-primary"
              >
                CVV Code
              </label>
              <input
                type="password"
                name="cvvcode"
                id="cvvcode"
                placeholder="234"
                className="mt-1 p-2 w-full border rounded-md "
              />
            </div>
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
            onClick={onFinish}
            className=" flex justify-center items-center gap-3 w-24 bg-success text-white font-normal py-3 rounded-md tracking-[0.43px] "
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step04;
