import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function navbar() {
  const { data: session, status } = useSession();
  return (
    <div>
      <navbar className="bg-[#0d0d3a] h-12 relative flex w-[100%]">
        <Image
          src="/teamLogo.png"
          alt="teamlogo"
          width={100}
          height={100}
          className="h-[40px] w-[100px] inline m-2 mx-4"
        />

        {status == "authenticated" && session ? (
          <span className="w-[40px] absolute flex right-80">
            <button className="bg-white text-[#8888f5] px-5 py-2 rounded-[16px] m-2 text-sm float-right">
              LENDER
            </button>
            <button className="bg-white text-[#8888f5] px-5 py-2 rounded-[16px] m-2 text-sm float-right">
              BORROWER
            </button>
          </span>
        ) : (
          <span className="w-[40px] absolute flex right-80">
            <button className="bg-white text-[#8888f5] px-5 py-2 rounded-[16px] m-2 text-sm float-right">
              Sign Out
            </button>
          </span>
        )}
      </navbar>
    </div>
  );
}

export default navbar;
