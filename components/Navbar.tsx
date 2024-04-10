import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="logo icon"
          className="max-sm:size-10"
        />
        <p className="text-2xl text-center text-white font-extrabold">Sync</p>
      </Link>
      <div className="flex justify-between gap-5">
        {/* clerk user management */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
