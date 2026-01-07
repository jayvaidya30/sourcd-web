import Image from "next/image";
import ChangingText from "./ChangingText";
import { TagsBadge } from "./TagsBadge";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-center py-40 text-6xl font-medium text-neutral-300">
        <h1>
          Here you'll find resources for <br /> <ChangingText /> and more.
        </h1>
      </div>

      <div className="flex justify-center gap-3">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-r from-blue-600 to bg-pink-300 blur rounded-2xl opacity-75"></div>
          <input
            className="relative w-3xl px-3 py-3 text-gray-700 border bg-black border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:shadow-lg focus:shadow-pink-500/50"
            type="text"
            placeholder="Search for resources"
          ></input>
        </div>
        <button className="bg-[#0172d8]  py-2 px-4 rounded-2xl shadow-lg text-shadow-md tracking-wide">
          <Image
            src={"/send-white.svg"}
            alt="send button"
            width={30}
            height={30}
          ></Image>
        </button>
      </div>

      {/* <div className="flex gap-1 ml-135 mt-3">
        <TagsBadge text="WebDev" />
        <TagsBadge text="DevOps" />
        <TagsBadge text="DSA" />
        <TagsBadge text="More" />
      </div> */}
    </>
  );
};
