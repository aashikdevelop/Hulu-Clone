"use client";
import requests from "@/utils/requests";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import React from "react";

function Nav() {
  const SearchParams = useSearchParams();
  const genre = SearchParams.get("genre");


  return (
    <nav className="relative">
      <div className="flex items-center px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20  overflow-x-scroll  overflow-y-hidden scrollbar-hide  ">
        {Object.entries(requests).map(([key, { param, title, url }]) => (
          <Link href={`/?genre=${param}`}>
            <h2
              key={key}
              className={` cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 lg:first:ml-16`}
            >
              {title}
            </h2>
          </Link>
        ))}
      </div>
      <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
      <div className=" absolute top-0 left-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
