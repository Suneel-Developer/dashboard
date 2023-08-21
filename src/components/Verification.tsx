import React from "react";
import Link from "next/link";
import {MdEmail} from 'react-icons/md'
interface Verification {
  onNext: () => void;
}

const Step02: React.FC<Verification> = ({ onNext }) => {
  return (
    <div className="p-0 lg:p-6 md:w-3/5 w-11/12">
      <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">Verify your email <MdEmail className="text-dark_text" /></h1>
      <p className="text-text font-normal text-sm mb-6">
        Account activation link sent to your email address: hello@example.com
        Please follow the link inside to continue.
      </p>
      <form action="#">
        <button
          type="submit"
          onClick={onNext}
          className="w-full bg-secondary text-white py-3 shadow-md rounded-md "
        >
          Skip for now
        </button>

        <div className="flex gap-2 mt-4 text-sm justify-center text-text">
          <p className="text-sm">Didn't get the mail? </p>
          <Link href="/login" className="text-secondary font-medium text-sm">
            Resend
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Step02;
