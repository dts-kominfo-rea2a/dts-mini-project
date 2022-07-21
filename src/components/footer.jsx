import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-900 p-2 py-8 md:px-48">
        <div className="flex">
          <div className="w-1/4 flex-row gap-5">
            <div className="text-white text-xs p-1">Audio & Subtittle</div>
            <div className="text-white text-xs p-1">Media Center</div>
            <div className="text-white text-xs p-1">Security</div>
            <div className="text-white text-xs p-1">Contact Us</div>
          </div>
          <div className="w-1/4 flex-row gap-5">
            <div className="text-white text-xs p-1">Audio Description</div>
            <div className="text-white text-xs p-1">Investor Realations</div>
            <div className="text-white text-xs p-1">Legal Provisions</div>
          </div>
          <div className="w-1/4 flex-row gap-5">
            <div className="text-white text-xs p-1">Help Center</div>
            <div className="text-white text-xs p-1">Jobs</div>
            <div className="text-white text-xs p-1">Cookie Preferences</div>
          </div>
          <div className="w-1/4 flex-row gap-5">
            <div className="text-white text-xs p-1">Gifts Card</div>
            <div className="text-white text-xs p-1">Terms Of Use</div>
            <div className="text-white text-xs p-1">Corporate Informations</div>
          </div>
        </div>

        <div className="flex-row py-1">
          <div className=" w-max  border border-stone-300 text-white text-xs p-2 ">
            Service Code
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
