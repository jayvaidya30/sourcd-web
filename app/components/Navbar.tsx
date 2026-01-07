import logo from "../../public/single-logo.svg"
const navLinks = ["About", "Socials", "Login"];

export default function Navbar() {
  return (
    <div className="flex flex-col  items-center relative bg-black">
      <header className="flex w-234 h-17.75 items-center justify-between px-16 py-6 relative">
        <div className="flex items-center gap-2 relative flex-1 grow -mt-2.125 -mb-2.125">
          <img
            className="relative w-10 h-10 aspect-[1] object-cover"
            alt="Logo"
            src={logo.src}
          />

          <div className="relative flex flex-1 font-['Inter-SemiBold',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[34.8px]">
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
    </div>
  );
}











// import Image from "next/image";
// import Link from "next/link";

// export const Navbar = () => {
//   const links = [
//     {
//       href: "/guide",
//       title: "Guide",
//     },
//     {
//       href: "/pricing",
//       title: "Pricing",
//     },
//     {
//       href: "/social",
//       title: "Social",
//     }, {
//       title: "Login",
//       href: "/login"
//     }
//   ];

//   return (
//     <div className=" max-w-4xl max-h-3 mt-5 mx-auto md:py-8 flex items-center justify-between py-4 px-4 rounded-4xl ">
//       <Link href={"/"}>
//         <Image
//           src="/logo.svg"
//           alt="logo"
//           height={130}
//           width={130}
//           draggable={false}
//           loading="lazy"
//         ></Image>
//       </Link>
//       <div className="flex items-center gap-8 text-xl">
//         {links.map((link, index) => (
//           <Link
//             href={link.href}
//             key={index}
//             className="text-neutral-300 font-medium hover:text-white transition duration-200"
//           >
//             {link.title}
//           </Link>
//         ))}
//         <button className="bg-[#0172d8] text-white py-2 px-4 rounded-lg shadow-lg text-shadow-md tracking-wide">
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };
