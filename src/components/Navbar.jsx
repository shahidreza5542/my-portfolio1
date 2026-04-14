import React, { useState } from "react";
import A from "./component/A";

const Navbar = () => {

  return (
    <nav className="z-100 border-b-[0.5px] border-white/20 backdrop-blur-md w-screen text-white justify-between flex items-center py-4 md:px-20 px-4 sticky top-0 overflow-hidden">
      <p className="text-xl font-bold">SHAHID_REZA</p>

      <div className="md:flex gap-3 hidden">
        <A title="01. HOME" href={'#'}/>
        <A title="02. ABOUT" href={'#about'}/>
        <A title="03. PROJECTS" href={'#projects'}/>
        <A title="04. SKILLS" href={'#skills'}/>
        <A title="05. CONTACT" href={'#contect'}/>
      </div>

      <a href="src/assets/logo.png" download={'Resume'} className="bg-white text-black px-4 py-2 hover:bg-white/80 transition-all duration-200 text-xs font-medium">RESUME.SH</a>
    </nav>
  );
};

export default Navbar;