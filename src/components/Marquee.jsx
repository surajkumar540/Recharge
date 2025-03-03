import React from "react";

const Marquee = () => {
  return (
    <div className="flex overflow-hidden">
      <div className=" mb-10 pt-7 whitespace-nowrap relative bottom-12 lg:bottom-7 w-full bg-primary bg-teal-600  ">
        <div className="marquee h-28 flex justify-center items-center">
          <span
            className={`text-xl capitalize font-semibold tracking-wider flex justify-center items-center text-white `}
          >
            Build for work Tatasky closed below 100rs recharge. <br />
            Min recharge amount is now 100rs in tatasky
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
