import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import {FcLock} from "react-icons/fc"

const Forgotpassword = () => {
  return (
    <section className="flex h-screen bg-[url('/assets/login.webp')] bg-cover	bg-no-repeat bg-center lg:bg-none">
      <div className="w-0 lg:w-1/2 h-auto relative">
        <Image src="/assets/login.webp" alt="Login Image" layout="fill" />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="lg:p-6 py-20 px-10 md:w-3/5 w-11/12 bg-white">
          <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary">Forgot Password? <FcLock /> </h1>
          <p className="text-primary font-medium text-sm mb-6">
            Enter your email, and we'll send you instructions to reset your
            password
          </p>
          <form action="#">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                id="email"
                className="mt-1 p-2 w-full border rounded-md "
              />
            </div>

            <Link href="/verification">
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 shadow-md rounded-md tracking-[0.43px] "
              >
                Send Reset Link
              </button>
            </Link>

            <Link
              href="/login"
              className=" flex gap-1 items-center justify-center mt-3 text-secondary font-medium text-sm"
            >
              <BiChevronLeft className="text-2xl" /> Back to log in
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forgotpassword;
