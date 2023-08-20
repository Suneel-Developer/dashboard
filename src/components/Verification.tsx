import React from "react";
import Link from "next/link";
import {AiFillMessage} from "react-icons/ai"

interface Verification {
  onNext: () => void;
}

const Step02: React.FC<Verification> = ({ onNext }) => {
  return (
    <div className="p-0 lg:p-6 md:w-3/5 w-11/12">
      <h1 className="text-lg md:text-2xl font-semibold mb-4 flex items-center gap-2 text-primary">Verify your email <AiFillMessage /></h1>
      <p className="text-dark_text font-normal text-lg mb-6">
        Account activation link sent to your email address: hello@example.com
        Please follow the link inside to continue.
      </p>
      <form action="#">
        <button
          type="submit"
          onClick={onNext}
          className="w-full bg-secondary text-white py-3 shadow-md rounded-md tracking-[0.43px]"
        >
          Skip for now
        </button>

        <div className="flex gap-2 mt-4 text-sm justify-center">
          <p className="text-sm text-dark_text">Didn't get the mail? </p>
          <Link href="/login" className="text-secondary font-medium text-sm">
            Resend
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Step02;
