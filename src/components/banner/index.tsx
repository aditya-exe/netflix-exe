"use client"

import { BannerType } from "@/types/netflix-types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner: React.FC<BannerType> = (props) => {
  const { title, subtitle, imageUrl, videoId } = props;
  const router = useRouter();

  function handleOnPlay() {
    router.push(`/video?videoId=${videoId}`);
  }

  return (
    <div className={"w-full h-[80vh] relative"}>
      <div className={"absolute w-full h-full z-[10]"}>
        <div className={"flex justify-start pl-[4rem] pr-[4rem] h-full flex-col mt-[6rem]"}>
          <div className={"flex"}>
            <p className={"text-[60px] select-none text-red-600 font-extrabold leading-none"}>N</p>
            <p className={"text-[14px] text-gray-400 select-none self-center leading-5"}>S E R I E S</p>
          </div>
          <h3 className={"text-[24px] leading-[2rem] text-white"}>{title}</h3>
          <h3 className={"text-[18px] leading-[1.75rem] text-white"}>{subtitle}</h3>

          <div className={"flex flex-row w-full"}>
            <button className={"flex items-center justify-center px-[20px] py-[8px] mt-[20px] rounded-[8px] bg-white w-[8rem]"} onClick={handleOnPlay}>
              <Image src="/static/play_arrow.svg" alt="Play icon" width={32} height={32} />
              <span className={"text-[#1F2937] font-semibold text-[18px] leading-[1.75rem] pl-[0.25rem] text-center"}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div className={"absolute w-full h-full bottom-0 bg-cover"} style={{ backgroundImage: `url(${imageUrl}`, }} />
    </div>
  )
}

export default Banner;