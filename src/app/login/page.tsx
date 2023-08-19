import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoGoogle } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

const Login = () => {
  return (
    <section className="flex h-screen bg-[url('/assets/login.webp')] bg-cover	bg-no-repeat bg-center lg:bg-none">
      <div className="w-0 lg:w-1/2 h-auto relative">
        <Image src="/assets/login.webp" alt="Login Image" layout="fill" />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="lg:p-6 py-20 px-10 w-3/5 bg-white">
          <h1 className="text-2xl font-semibold mb-4">
            Welcome to Octopus! 👋
          </h1>
          <p className="text-text font-normal text-sm mb-6">
            Please sign in to your account and start the adventure
          </p>
          <form action="#">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-normal text-text"
              >
                Email or Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md "
              />
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Link
                  href="/forgotpassword"
                  className=" text-secondary font-medium text-sm "
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md "
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="mr-2 border rounded focus:ring focus:ring-indigo-200"
              />
              <label htmlFor="checkbox" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 shadow-md rounded-md "
            >
              Sign in
            </button>

            <div className="flex gap-2 mt-4 text-sm text-text">
              <p className="text-sm">New on our platform?</p>
              <Link
                href="/signup"
                className="text-secondary font-medium text-sm"
              >
                Create an account
              </Link>
            </div>
          </form>

          <div className="flex flex-col justify-center items-center mt-5">
            <p className="text-center p-2 text-sm -mb-5 z-10 bg-white">OR</p>
            <hr className="w-full border-t-2" />
          </div>

          <div className="flex mt-10 items-center justify-center gap-3">
            <Link
              href="#"
              className="bg-light_grey w-38 h-38 text-center p-2 rounded  "
            >
              <BiLogoFacebook className="text-lg text-dark_grey" />
            </Link>
            <Link
              href="#"
              className="bg-light_blue w-38 h-38 text-center p-2 rounded  "
            >
              <AiOutlineTwitter className="text-lg text-dark_blue" />
            </Link>
            <Link
              href="#"
              className="bg-light_red w-38 h-38 text-center p-2 rounded  "
            >
              <BiLogoGoogle className="text-lg text-dark_red" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
