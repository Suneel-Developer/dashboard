import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Contact  {
  onNext: () => void;
  onPrevious: () => void;
}

const Step03: React.FC<Contact> = ({ onNext, onPrevious }) => {
  return (
    <div className="p-0 lg:p-6 md:w-3/5 w-11/12">
      <h1 className="text-2xl font-semibold mb-4">Contact Information</h1>
      <p className="text-text font-normal text-sm mb-6">
        Enter Your Contact Information
      </p>
      <form action="#">
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="mb-2 w-full md:w-2/4">
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
              placeholder="John"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
          <div className="mb-2 w-full md:w-2/4">
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
              placeholder="Doe"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
        </div>

       
          <div className="mb-2">
            <label
              htmlFor="jobtitle"
              className="block text-sm font-normal text-text"
            >
              Job Title
            </label>
            <input
              type="text"
              name="jobtitle"
              id="jobtitle"
              placeholder="Job Title"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
        

          <div className="flex gap-2 mb-2">

<div className="w-1/6">
   <label
     htmlFor="Code"
     className="block text-sm font-medium text-gray-700"
   >
    Area Code
   </label>
   <input
     type="text"
     name="Code"
     placeholder="Code"
     id="Code"
     className="mt-1 p-2 w-full border rounded-md "
   />
 </div>
 <div className="w-5/6">
   <label
     htmlFor="mobile"
     className="block text-sm font-medium text-gray-700"
   >
     Primary number
   </label>
   <input
     type="text"
     name="mobile"
     placeholder="Primary number"
     id="mobile"
     className="mt-1 p-2 w-full border rounded-md "
   />
 </div>
 </div>
 <div className="flex gap-2 mb-2">

<div className="w-1/6">
   <label
     htmlFor="Code"
     className="block text-sm font-medium text-gray-700"
   >
    Area Code
   </label>
   <input
     type="text"
     name="Code"
     placeholder="Code"
     id="Code"
     className="mt-1 p-2 w-full border rounded-md "
   />
 </div>
 <div className="w-5/6">
   <label
     htmlFor="mobile"
     className="block text-sm font-medium text-gray-700"
   >
     Mobile
   </label>
   <input
     type="text"
     name="mobile"
     placeholder="Mobile / Fax"
     id="mobile"
     className="mt-1 p-2 w-full border rounded-md "
   />
 </div>
 </div>
 <div className="flex gap-2 mb-2">

<div className="w-1/6">
   <label
     htmlFor="Code"
     className="block text-sm font-medium text-gray-700"
   >
    Area Code
   </label>
   <input
     type="text"
     name="Code"
     placeholder="Code"
     id="Code"
     className="mt-1 p-2 w-full border rounded-md "
   />
 </div>
 <div className="w-5/6">
   <label
     htmlFor="fax"
     className="block text-sm font-medium text-gray-700"
   >
     Fax
   </label>
   <input
     type="text"
     name="fax"
     placeholder="Fax"
     id="fax"
     className="mt-1 p-2 w-full border rounded-md "
   />
 </div>
 </div>

     

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-normal text-text"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="mt-1 p-2 w-full border rounded-md "
            />
          </div>
          
          <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md "
          />
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
