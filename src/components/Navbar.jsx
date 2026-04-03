import React, { useState } from "react";
import A from "./component/A";

const Navbar = () => {

  return (
    <nav className="z-100 border-b-[0.5px] border-white/20 bg-[#131313] w-full text-white justify-between flex items-center py-4 md:px-20 px-4 fixed top-0">
      <p className="text-xl font-bold">SHAHID_REZA</p>

      <div className="md:flex gap-3 hidden">
        <A title="01. HOME" href={'#'}/>
        <A title="02. ABOUT" href={'#about'}/>
        <A title="03. PROJECTS" href={'#projects'}/>
        <A title="04. SKILLS" href={'#skills'}/>
        <A title="05. CONTACT" href={'#contect'}/>
      </div>

      <button className="bg-white text-black px-4 py-2 hover:bg-white/80 transition-all duration-200 text-xs font-medium">RESUME.SH</button>
    </nav>
  );
};

export default Navbar;