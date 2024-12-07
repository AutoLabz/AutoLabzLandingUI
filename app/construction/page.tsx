import React from 'react';
import 'tailwindcss/tailwind.css';
import Buildling from "/public/building.svg";
import Image from "next/image";


export default function UnderConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">Under Construction</h1>
      <p className="text-xl">Working on it on the side! not yet consumer ready!</p>
      <div className="mt-8">
        <Image src="/buildingv2.svg" alt="Building Icon" width={48} height={48} />
      </div>
    </div>
  );
};

