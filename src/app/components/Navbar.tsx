import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-10">
        <h1 className="text-3xl font-bold">Tappa!</h1>
        <div className="flex gap-5 justify-center items-center">
          <Link
            href="https://web-ten-omega-44.vercel.app/"
            className="bg-white text-black sm:px-4 sm:py-2 px-2 py-1 text-sm  rounded-full"
          >
            Try Web
          </Link>
          <button className="">Get started</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
