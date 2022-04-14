import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
function NavBar() {
  const { data: session, status } = useSession();
  console.log(session)
  return (
    <div>
      <navbar className="bg-[#dddddd] relative   flex w-[100%] px-4 py-2  shadow-sm">
        <Link href="/">
        <a>
        <img
          src="/logo.svg"
          alt="teamlogo"

          className=" w-12 object-cover   inline   mx-4"
        />
        </a>

      </Link>

        {!(status == "authenticated" && session) ? (
          <span className="w-[40px] absolute flex right-40 justify-center align-middle">
            <button className="bg-white text-[#8888f5] px-5 py-2 rounded-[16px] m-2 text-sm float-right">
              LENDER
            </button>
            <button className="bg-white text-[#47be29] px-5 py-2 rounded-[16px] m-2 text-sm float-right">
              BORROWER
            </button>
          </span>
        ) : (
          <span className="w-[40px] absolute flex right-80">
            <button onClick={signOut} className="bg-white text-[#8888f5] px-5 py-2 rounded-[16px] m-2 text-sm float-right">
              Sign Out
            </button>
          </span>
        )}
      </navbar>
    </div>
  );
}

export default NavBar;
