"use client"
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from 'next/navigation';

const Resetpassword: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/login');
  };
  return (
    <section className="flex h-screen bg-[url('/assets/login.webp')] bg-cover	bg-no-repeat bg-center lg:bg-none">
      <div className="w-0 lg:w-1/2 h-auto relative">
        <Image src="/assets/login.webp" alt="Login Image" layout="fill" />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <div className="p-4 md:p-6 md:w-3/5 w-11/12 bg-white">
          <h1 className="text-2xl font-semibold mb-1">Reset Password 🔒</h1>
          <p className="text-text font-bold text-sm mb-6">
            for john.doe@email.com
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-normal text-text"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="············"
                id="email"
                className="mt-1 p-2 w-full border rounded-md "
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confrim password"
                className="block text-sm font-normal text-text"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="············"
                id="email"
                className="mt-1 p-2 w-full border rounded-md "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 shadow-md rounded-md "
            >
              Set New Password
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

export default Resetpassword;
