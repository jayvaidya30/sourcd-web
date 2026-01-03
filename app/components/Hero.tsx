import Image from "next/image";
import ChangingText from "./ChangingText";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-center py-40 text-6xl font-medium">
        <h1>
          Here you'll find resources for <br/ > <ChangingText />  and more.
        </h1>
      </div>
      <div className="flex justify-center gap-3">
        <input
          className="w-3xl px-3 py-3 text-gray-700 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search for resources"
        ></input>
        <button className="bg-[#0172d8]  py-2 px-4 rounded-2xl shadow-lg text-shadow-md tracking-wide">
          <Image
            src={"/send-white.svg"}
            alt="send button"
            width={30}
            height={30}
          ></Image>
        </button>
      </div>
    </>
  );
};
