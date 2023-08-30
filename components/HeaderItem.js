import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex-col items-center cursor-pointer flex w-12 sm:w-12 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce  " />
      <p className="opacity-0 group-hover:opacity-100 text-l tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
