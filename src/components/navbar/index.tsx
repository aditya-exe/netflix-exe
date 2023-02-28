"use client"

// import { NavbarType } from "@/types/netflix-types";
import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { m } from "@/lib/magic-client";

const Navbar: React.FC = () => {
  // const { userName } = props;
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [didToken, setDidToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async function asyUe() {
      try {
        const { email } = await m?.user.getMetadata()!;
        setUsername(email!);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [])

  function handleOnClickHome(e: MouseEvent<any>) {
    e.preventDefault();
    router.push("/");
  }

  function handleOnClickMyList(e: MouseEvent<any>) {
    e.preventDefault();
    router.push("/browse/my-list");
  }

  function handleShowDropdown(e: MouseEvent<any>) {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  }

  async function handleSignout(e: MouseEvent<any>) {
    e.preventDefault();
    try {
      await m?.user.logout();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={"text-white fixed top-0 drop-shadow w-full z-50"}>
      <div className={"px-4 flex p-5"}>
        <Link className={"flex font-[500] text-[16px] items-center mb-4"} href="/">
          <div className={"text-red-600 w-32"}>
            <Image src="/static/netflix.svg" alt="Netflix logo" width="128" height="34" />
          </div>
        </Link>

        <ul className={"flex flex-row w-1/2 ml-8 text-lg list-none"}>
          <li className={"font-semibold cursor-pointer mr-3"} onClick={(e) => handleOnClickHome(e)}>
            Home
          </li>
          <li className={"cursor-pointer font-semibold"} onClick={(e) => handleOnClickMyList(e)}>
            My List
          </li>
        </ul>
        <nav className={"flex items-start ml-auto"}>
          <div>
            <button className={"flex items-center overflow-hidden text-white"} onClick={(e) => handleShowDropdown(e)}>
              <p className={"text-[16px]"}>{username}</p>
              {/** Expand more icon */}
              <Image src={"/static/expand_more.svg"} alt="Expand dropdown" width="24" height="24" />
            </button>

            {showDropdown && (
              <div className={"absolute w-[88px] translate-x-[-2%] ml-auto mt-2 py-2 bg-black border-[1px] text-white rounded-[4px] border-blue-400 shadow-md"}>
                <Link href={"/login"} className={"flex pl-2 text-base rounded-[0.25rem] cursor-pointer hover:underline"} onClick={(e) => handleSignout(e)}>
                  Sign out
                </Link>
                {/* <div className={"py-2"} /> */}

              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;