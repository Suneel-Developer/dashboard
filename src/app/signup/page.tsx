"use client";
import Image from "next/image";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import React, { useState } from "react";
import Company from "../../components/Company";
import Verification from "../../components/Verification";
import Contact from "../../components/Contact";
import Billing from "../../components/Billing";
import SystemDevelopment from "../../components/SystemDevelopment";

enum Steps {
  Company,
  Contact,
  Verification,
  SystemDevelopment,
  Billing,
}

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(Steps.Company);
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
        <div className="flex justify-start md:justify-between md:flex-nowrap flex-wrap w-100 gap-5 items-center mb-4">
          <div className="flex gap-2 items-center cursor-pointer ">
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-10 md:h-10 rounded-lg ${
                currentStep === Steps.Company ||
                completedSteps.has(Steps.Company)
                  ? "bg-secondary text-white"
                  : "bg-grey"
              }`}
              disabled={currentStep === Steps.Company}
            >
              <RiHome6Line className="text-lg md:text-xl " />
            </button>
            <div>
              <h3 className="font-bold text-primary text-xs md:text-sm">Company</h3>
              <p className=" font-normal text-text text-[9px] md:text-xs">Create Company</p>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer ">
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-10 md:h-10 rounded-lg ${
                currentStep === Steps.Contact ||
                completedSteps.has(Steps.Contact)
                  ? "bg-secondary text-white"
                  : "bg-grey"
              }`}
              disabled={currentStep === Steps.Contact}
            >
              <FiUsers className=" text-lg md:text-xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-xs md:text-sm">Contact</h3>
              <p className=" font-normal text-text text-[9px] md:text-xs">
                Contact Information
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer ">
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-10 md:h-10 rounded-lg ${
                currentStep === Steps.Verification ||
                completedSteps.has(Steps.Verification)
                  ? "bg-secondary text-white"
                  : "bg-grey"
              }`}
              disabled={currentStep === Steps.Verification}
            >
              <AiOutlineMail className="text-lg md:text-xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-xs md:text-sm">Verification</h3>
              <p className=" font-normal text-text text-[9px] md:text-xs">
                Email Verification
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer ">
            <button
              className={`flex items-center justify-center border w-8 h-8 md:w-10 md:h-10 rounded-lg ${
                currentStep === Steps.SystemDevelopment ||
                completedSteps.has(Steps.SystemDevelopment)
                  ? "bg-secondary text-white"
                  : "bg-grey"
              }`}
              disabled={currentStep === Steps.SystemDevelopment}
            >
              <MdSettingsSystemDaydream className=" text-lg md:text-xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-xs md:text-sm">
                System Development
              </h3>
            </div>
          </div>

          <div className="flex gap-2 items-center cursor-pointer ">
            <button
              className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg ${
                currentStep === Steps.Billing ||
                completedSteps.has(Steps.Billing)
                  ? "bg-secondary text-white"
                  : "bg-grey"
              }`}
              disabled={currentStep === Steps.Billing}
            >
              <HiOutlineDocumentText className="text-lg md:text-xl" />
            </button>
            <div>
              <h3 className="font-bold text-primary text-xs md:text-sm">Billing</h3>
              <p className=" font-normal text-text text-[9px] md:text-xs">Payment Details</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4  ">
          {currentStep === Steps.Company && <Company onNext={handleNext} />}
          {currentStep === Steps.Contact && (
            <Contact onNext={handleNext} onPrevious={handlePrevious} />
          )}
          {currentStep === Steps.Verification && (
            <Verification onNext={handleNext} />
          )}
          {currentStep === Steps.SystemDevelopment && <SystemDevelopment onNext={handleNext} onPrevious={handlePrevious} />}
          {currentStep === Steps.Billing && (
            <Billing onPrevious={handlePrevious} onFinish={handleFinish} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Signup;
