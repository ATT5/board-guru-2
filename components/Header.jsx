"use client";
import { userIcon } from "@/assets";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-5 px-5 flex justify-between  bg-black/5 ">
      <h1 className=" text-3xl font-bold ">
        Board
        <span className="  p-1 mr-2 rounded-md  bg-gradient-to-r from-purple-400 to-yellow-400">
          Guru
        </span>
      </h1>
      <div className="flex font-bold items-center">
        <p className="hidden md:block">
          Where Every Project{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md p-1">
            Finds its Flow.
          </span>
        </p>
        <Image src={userIcon} width={40} height={40} alt="user Icon" />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100
      rounded-md filter blur-3xl opacity-50 -z-50 "
      />
    </header>
  );
};

export default Header;
