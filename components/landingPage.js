import React from "react";

function landingPage() {
  return (
    <>
      <div className="flex min-h-screen landingPage">
        <div className="mx-32 my-24">
          <h1 className="text-white font-bold text-[60px]">MERAKI</h1>
          <div className="text-white">
            A peer to peer banking is an online system that allows <br />{" "}
            individual members to complete financial transection with <br /> one
            another by using an auction type process that <br /> lets member
            offer loans for a specific amount and at a specific rate.
          </div>
        </div>
        <div className="float-right mx-32 my-24">
          <h3 className="text-[40px] text-white font-bold my-2 mb-10">
            REGSITER NOW!
          </h3>
          <button className="bg-[white] px-6 py-2 rounded-[16px] text-[#8888f5] font-bold text-[20px] mr-2">
            LENDER
          </button>
          <button className="bg-[white] px-6 py-2 rounded-[16px] text-[#8888f5] font-bold text-[20px] ml-2">
            BORROWER
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <h1 className="text-[#8888f5] font-bold text-[40px] mx-32 mt-24">
            LENDER
          </h1>
          <div className="mx-32">
            A peer to peer banking is an online system that allows <br />{" "}
            individual members to complete financial transection with <br /> one
            another by using an auction type process that <br /> lets member
            offer loans for a specific amount and at a specific rate.
          </div>
        </div>
        <button className="text-[white] px-6 py-2 rounded-[16px] bg-[#8888f5] font-bold text-[20px] float-right h-[50px] mt-24 ml-24">
          Register as LENDER
        </button>
      </div>

      <div className="mb-24 flex items-center mt-16">
        <button className="text-[white] px-6 py-2 rounded-[16px] bg-[#8888f5] font-bold text-[20px] h-[50px] mt-24 ml-32">
          Register as BORROWER
        </button>
        <div className="float-right mr-16 ml-auto">
          <h1 className="text-[#8888f5] font-bold text-[40px]">
            BORROWER
          </h1>
          <div className="">
            A peer to peer banking is an online system that allows <br />{" "}
            individual members to complete financial transection with <br /> one
            another by using an auction type process that <br /> lets member
            offer loans for a specific amount and at a specific rate.
          </div>
        </div>
      </div>
    </>
  );
}

export default landingPage;
