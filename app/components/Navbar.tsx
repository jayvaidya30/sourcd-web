import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const links = [
    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/social",
      title: "Social",
    },
  ];

  return (
    <div className=" max-w-4xl mx-auto md:py-8 flex items-center justify-between py-4 px-4 rounded-4xl">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          height={150}
          width={150}
          draggable={false}
          loading="lazy"
        ></Image>
      </Link>
      <div className="flex items-center gap-8 text-xl">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#0172d8] text-white py-2 px-4 rounded-lg shadow-lg text-shadow-md tracking-wide">
          Login
        </button>
      </div>
    </div>
  );
};
