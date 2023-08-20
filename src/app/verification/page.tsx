import Image from "next/image";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";

const Verification = () => {
  return (
    <section className="flex h-screen bg-[url('/assets/login.webp')] bg-cover	bg-no-repeat bg-center lg:bg-none">
      <div className="w-0 lg:w-1/2 h-auto relative">
        <Image src="/assets/login.webp" alt="Login Image" layout="fill" />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <div className="lg:p-6 py-20 px-10 md:w-3/5 w-11/12 bg-white ">
          <h1 className="text-2xl font-semibold mb-1 flex items-center gap-2 text-primary">
            Two-Step Verification <AiFillMessage />
          </h1>
          <p className="text-dark_text leading-6 text-base">
            We sent a verification code to your mobile. Enter the code from the
            mobile in the field below.
          </p>
          <p className="text-text font-bold text-sm mb-6">******9763</p>
          <form action="#">
            <div className="mb-4">
              <label
                htmlFor="verificationCode"
                className="block text-sm font-normal text-dark_text"
              >
                Type your 6 digit security code
              </label>

              <div className="grid grid-cols-6 gap-2 mt-1">
                <input
                  type="text"
                  name="digit1"
                  maxLength={1}
                  className="p-3 text-center border rounded-md w-full"
                />
                <input
                  type="text"
                  name="digit2"
                  maxLength={1}
                  className="p-3 text-center border rounded-md w-full"
                />
                <input
                  type="text"
                  name="digit3"
                  maxLength={1}
                  className="p-3 text-center border rounded-md w-full"
                />
                <input
                  type="text"
                  name="digit4"
                  maxLength={1}
                  className="p-3 text-center border rounded-md w-full"
                />
                <input
                  type="text"
                  name="digit5"
                  maxLength={1}
                  className="p-3 text-center border rounded-md w-full"
                />
                <input
                  type="text"
                  name="digit6"
                  maxLength={1}
                  className="p-3 text-center border rounded-md w-full"
                />
              </div>
            </div>

            <Link href="/resetpassword">
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 shadow-md rounded-md tracking-[0.43px] "
              >
                Verify my account
              </button>
            </Link>

            <div className="flex gap-2 mt-4 text-sm justify-center text-dark_text">
              <p className="text-sm">Didn't get the code? </p>
              <Link
                href="/signup"
                className="text-secondary font-medium text-sm "
              >
                Resend
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verification;
