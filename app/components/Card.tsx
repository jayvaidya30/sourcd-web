import Image from "next/image";

export const Card = ({
  img,
  imageSideText,
  belowText,
  alt,
}: {
  img: string;
  imageSideText: string;
  belowText: string;
  alt: string;
}) => {
  return (
    <div className="max-w-4xl mx-auto mt-300  bg-amber-900">
      <Image src={img} alt={alt} width={35} height={35} />
      <div></div>
    </div>
  );
};
