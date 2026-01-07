interface Tag {
  label: string;
}

const navLinks = ["Login", "Login", "Login"];

const tagRows: Tag[][] = [
  [{ label: "Frontend" }, { label: "Backend" }, { label: "Full Stack" }],
  [{ label: "DevOps" }, { label: "Data Analyst" }, { label: "AI Engineer" }],
  [
    { label: "Data Scientist" },
    { label: "Data Engineer" },
    { label: "Andorid" },
  ],
  [{ label: "Machine Leaning" }, { label: "PostgresSQL" }, { label: "iOS" }],
  [
    { label: "Blockchain" },
    { label: "Cyber Security" },
    { label: "UX Design" },
  ],
]; 
 
 
 
 
 <div className="flex flex-col min-h-270 items-center relative bg-black">
      <header className="flex w-234 h-17.75 items-center justify-between px-16 py-6 relative">
        <div className="flex items-center gap-2 relative flex-1 grow -mt-2.125 -mb-2.125">
          <img
            className="relative w-10 h-10 aspect-[1] object-cover"
            alt="Logo"
          />

          <div className="relative flex items-center justify-center flex-1 font-['Inter-SemiBold',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[34.8px]">
            Sourcd
          </div>
        </div>

        <nav className="inline-flex flex-wrap items-center gap-[24px_24px] relative flex-[0_0_auto] -mt-3 -mb-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative flex items-center justify-center w-fit font-['Inter-Medium',Helvetica] font-medium text-white text-base tracking-[-0.08px] leading-[23.2px] whitespace-nowrap"
            >
              {link}
            </a>
          ))}

          <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-3 relative flex-[0_0_auto] bg-white rounded-xl">
            <span className="relative flex items-center justify-center w-fit -mt-px font-['Inter-Medium',Helvetica] font-medium text-black text-base text-center tracking-[-0.08px] leading-[23.2px] whitespace-nowrap">
              Sign Up
            </span>
          </button>
        </nav>
      </header>

      <main className="flex flex-col items-center">
        <h1 className="relative flex items-center justify-center w-104.25 h-38 [text-shadow:0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(255,255,255,1)_45%,rgba(0,0,255,1)_73%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Inter-Bold',Helvetica] font-bold text-transparent text-[40px] tracking-[-0.20px] leading-14.5">
          Developer Resources
        </h1>

        <p className="relative flex items-center justify-center w-164.25 h-22 font-['Inter-Medium',Helvetica] font-medium text-white text-[15px] text-center tracking-[-0.07px] leading-[21.8px]">
          Sourcd is an open-source platform where people can discover, share,
          and curate high-quality resources — articles, tools, videos,
          repositories, and more. Built with modern web technologies and
          designed to be simple, fast, and community-driven.
        </p>

        <form className="relative top-94.5 left-80.75 w-158.5 h-14 bg-[#141414] rounded-xl overflow-hidden shadow-[0px_0px_250px_16px_#0000ff]">
          <label htmlFor="search" className="sr-only">
            Search for a resource
          </label>
          <input
            id="search"
            type="search"
            placeholder="Search for a resource"
            className="relative top-[calc(50.00%-11px)] left-4.75 h-5.5 flex items-center justify-center font-['Inter-Medium',Helvetica] font-medium text-white text-[15px] text-center tracking-[-0.07px] leading-[21.8px] whitespace-nowrap bg-transparent border-0 outline-none w-[calc(100%-80px)]"
          />

          <button
            type="submit"
            aria-label="Search"
            className="relative h-[calc(100%-16px)] top-1.75 right-1.25 w-12 bg-white rounded-xl flex items-center justify-center"
          >
            <img className="w-6 h-6 object-cover" alt="Search" />
          </button>
        </form>

        <div className="relative top-131 left-142.25 w-35.5 h-8.25 bg-[#151414] rounded-[5px] overflow-hidden border border-solid border-[#2d2d2d]">
          <div className="relative w-[calc(100%-86px)] h-[calc(100%-13px)] top-1.25 left-10.75 flex items-center justify-center font-['Inter-Medium',Helvetica] font-medium text-white text-base text-center tracking-[-0.08px] leading-[23.2px] whitespace-nowrap">
            Tags
          </div>
        </div>

        <section
          className="relative top-147.25 left-85.5 w-164.25"
          aria-label="Resource tags"
        >
          {tagRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-6 mb-4"
              style={{ marginTop: rowIndex === 0 ? 0 : "20px" }}
            >
              {row.map((tag, tagIndex) => (
                <button
                  key={tagIndex}
                  className="w-50.75 h-11.25 bg-[#0c0c0c] rounded-[5px] overflow-hidden border border-solid border-[#2d2d2d] relative"
                  aria-label={`Filter by ${tag.label}`}
                >
                  <img
                    className="relative w-[4.62%] h-[30.00%] top-[38.33%] left-[89.07%]"
                    alt=""
                  />

                  <span className="relative h-[calc(100%-22px)] top-3 left-2.75 flex items-center justify-center font-['Inter-SemiBold',Helvetica] font-semibold text-[#ffffffbf] text-[15px] tracking-[-0.30px] leading-[21.8px] whitespace-nowrap">
                    {tag.label}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>