/* eslint-disable @next/next/no-img-element */
import { Outfit } from "next/font/google";
import React from "react";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});
export default function first() {
  return (
    <div className={`flex max-w-xs ${outfit.className}`}>
      <div className="flex flex-col items-center rounded-2xl bg-white p-4 text-center">
        <img
          src="/image-qr-code.png"
          alt="Image"
          className="w-full rounded-xl"
        />
        <div className="pl-1 pr-1 pt-3">
          <h2 className="flex  justify-center pb-3 font-bold text-dark-blue">
            Improve your frontend skills by building projects
          </h2>
          <p className="font-normal text-graylish-blue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
