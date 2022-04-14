import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function NavBar() {
  const { data: session, status } = useSession();
  console.log(session)
  return (
    <div>
      <navbar className="bg-[#0d0d3a] relative h-16 flex w-[100%] px-4 py-2  shadow-sm">
        <Image
          src="/teamLogo.png"
          alt="teamlogo"
          width={50}
          height={50}
          className="  inline m-2 mx-4"
        />

        {status == "authenticated" && session ? (
          <span className="w-[40px] absolute flex right-80 justify-center align-middle">
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

export default NavBar;
