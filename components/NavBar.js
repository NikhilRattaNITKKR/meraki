import React from "react";

function navbar() {
  return (
    <div>
      <navbar classname="bg-white h-12 flex w-[100%]">
        <img
          src="./teamLogo.png"
          alt="teamlogo"
          className="h-[40px] w-[100px] inline m-2 mx-4"
        />

        <span className="w-[40px]">
          <button className="bg-[#8888f5] text-white px-5 py-2 rounded-[16px] m-2 float-right">LENDER</button>
          <button className="bg-[#8888f5] text-white px-5 py-2 rounded-[16px] m-2 float-right">BORROWER</button>
        </span>
      </navbar>
    </div>
  );
}

export default navbar;
