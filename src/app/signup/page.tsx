"use client";
import Image from "next/image";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import {BiChevronRight} from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg";
import React, { useState } from "react";
import Account from "../../components/Account";
import Verification from "../../components/Verification";
import Personal from "../../components/Personal";
import Billing from "../../components/Billing";

enum Steps {
  Account,
  Verification,
  Personal,
  Billing,
}

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(Steps.Account);
  const [completedSteps, setCompletedSteps] = useState(new Set<Steps>());

  const handleNext = () => {
    setCompletedSteps((prevCompletedSteps) =>
      new Set(prevCompletedSteps).add(currentStep)
    );
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleFinish = () => {
    // Perform finishing actions
    alert("Signup completed!");
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="flex justify-center  h-screen bg-[url('/assets/login.webp')] bg-cover	bg-no-repeat bg-center lg:bg-none">
      <div className="w-0 lg:w-2/5 h-auto relative">
        <Image src="/assets/account.webp" alt="Account Image" layout="fill" />
      </div>

      <div className="w-11/12 flex justify-center h-max lg:h-full m-auto lg:m-0	 lg:justify-start p-5 lg:p-10 flex-col bg-white">
        
        <div className="flex justify-between md:flex-nowrap flex-wrap w-100 gap-5 items-center mb-4">

          <div className="flex gap-2 items-center cursor-pointer ">
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-12 lg:h-12 rounded lg:rounded-lg ${
                currentStep === Steps.Account ||
                completedSteps.has(Steps.Account)
                  ? "bg-secondary text-white"
                  : "bg-grey"
              }`}
              disabled={currentStep === Steps.Account}
            >
              <RiHome6Line className="text-lg md:text-2xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-[12px] md:text-sm">Account</h3>
              <p className=" font-normal text-text text-[8px] md:text-xs">Create Account</p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer ">
            <BiChevronRight className="text-md lg:text-2xl text-text " />
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-12 lg:h-12 rounded lg:rounded-lg ${
                currentStep === Steps.Verification ||
                completedSteps.has(Steps.Verification)
                  ? "bg-secondary text-white"
                  : "bg-grey text-text"
              }`}
              disabled={currentStep === Steps.Verification}
            >
              <AiOutlineMail className="text-lg lg:text-2xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-[12px] lg:text-sm">Verification</h3>
              <p className=" font-normal text-text text-[8px] lg:text-xs">
                Email Verification
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer ">
          <BiChevronRight className="text-md hidden md:block  lg:text-2xl text-text " />
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-12 lg:h-12 rounded lg:rounded-lg ${
                currentStep === Steps.Personal ||
                completedSteps.has(Steps.Personal)
                  ? "bg-secondary text-white"
                  : "bg-grey text-text"
              }`}
              disabled={currentStep === Steps.Personal}
            >
              <FiUsers className="text-lg lg:text-2xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-[12px] lg:text-sm">Personal</h3>
              <p className=" font-normal text-text text-[8px] lg:text-xs">
                Enter Information
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer ">
          <BiChevronRight className="text-md lg:text-2xl text-text " />
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-12 lg:h-12 rounded lg:rounded-lg ${
                currentStep === Steps.Billing ||
                completedSteps.has(Steps.Billing)
                  ? "bg-secondary text-white"
                  : "bg-grey text-text"
              }`}
              disabled={currentStep === Steps.Billing}
            >
              <CgFileDocument className="text-lg lg:text-2xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-[12px] lg:text-sm">Billing</h3>
              <p className=" font-normal text-text text-[8px] lg:text-xs">Payment Details</p>
            </div>
          </div>

        </div>








        <div className="flex justify-center items-center mt-4  ">
          {currentStep === Steps.Account && <Account onNext={handleNext} />}
          {currentStep === Steps.Verification && (
            <Verification onNext={handleNext} />
          )}
          {currentStep === Steps.Personal && (
            <Personal onNext={handleNext} onPrevious={handlePrevious} />
          )}
          {currentStep === Steps.Billing && (
            <Billing onPrevious={handlePrevious} onFinish={handleFinish} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Signup;
