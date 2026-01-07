import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center">
        <h1 className=" flex items-center justify-center w-104.25 h-38 [text-shadow:0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(255,255,255,1)_45%,rgba(0,0,255,1)_73%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Inter-Bold',Helvetica] font-bold text-transparent text-[40px] tracking-[-0.20px] leading-14.5">
          Developer Resources
        </h1>

        <p className=" flex items-center justify-center w-164.25 h-22 font-['Inter-Medium',Helvetica] font-medium text-white text-[15px] text-center tracking-[-0.07px] leading-[21.8px]">
          Sourcd is an open-source platform where people can discover, share,
          and curate high-quality resources — articles, tools, videos,
          repositories, and more. Built with modern web technologies and
          designed to be simple, fast, and community-driven.
        </p>
      </main>
    </div>
  );
};

export default Home;
