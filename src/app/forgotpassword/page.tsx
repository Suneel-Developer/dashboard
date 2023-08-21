"use client"; // I'm assuming this is a typo and should be "use strict";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from 'next/navigation';

interface ForgotProps {
  method: string;
  email: string;
  phone: string;
}

const Forgotpassword: React.FC<ForgotProps> = ({ email: propEmail, phone: propPhone }) => {
  const [authMethod, setAuthMethod] = useState<string>("email");
  const [inputEmail, setInputEmail] = useState<string>(propEmail);
  const [inputPhone, setInputPhone] = useState<string>(propPhone);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log the form values
    console.log('Authentication Method:', authMethod);
    console.log('Email:', inputEmail);
    console.log('Phone:', inputPhone);

    router.push('/verification');
  };

  return (
    <section className="flex h-screen bg-[url('/assets/login.webp')] bg-cover	bg-no-repeat bg-center lg:bg-none">
      <div className="w-0 lg:w-1/2 h-auto relative">
        <Image src="/assets/login.webp" alt="Login Image" layout="fill" />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="p-4 md:p-6 md:w-3/5 w-11/12 bg-white">
          <h1 className="text-2xl font-semibold mb-4">Forgot Password? 🔒</h1>
          <p className="text-text font-normal text-sm mb-6">
            Enter your email, and we'll send you instructions to reset your
            password
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-normal text-text"
              >
                Which method would you like to add?
              </label>
              <select
                id="method"
                className="mt-2 p-2 w-full border rounded-md outline-none "
                value={authMethod}
                onChange={(e) => setAuthMethod(e.target.value)}
              >
                <option value="email">Email</option>
                <option value="text">Text</option>
                <option value="phone">Phone Call</option>
              </select>
            </div>
            {authMethod === "email" && (
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-normal text-text"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@gmail.com"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md "
                  value={inputEmail}
                  onChange={(e)=> setInputEmail(e.target.value)}
                />
              </div>
            )}

            {authMethod === "phone" || authMethod === "text" ?(
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-normal text-text"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  id="phone"
                  className="mt-1 p-2 w-full border rounded-md "
                  value={inputPhone}
                  onChange={(e)=> setInputPhone(e.target.value)}
                />
              </div>
            ): null}

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 shadow-md rounded-md "
            >
              Send Reset Link
            </button>

            <Link
              href="/login"
              className=" flex gap-1 items-center justify-center mt-3 text-secondary font-medium text-sm"
            >
              <BiChevronLeft className="text-xl" /> Back to log in
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forgotpassword;
