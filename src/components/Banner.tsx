import { Link } from "react-router";

interface BannerProps {
  image: string;
  link?: string;
}

export function Banner({ image, link }: BannerProps) {
  return (
    <div className="w-full">
      {link ? (
        <Link to={link}>
          <img
            src={image}
            alt="Banner de ofertas"
            className="w-7xl h-auto object-cover my-5 mx-auto cursor-pointer" 
          />
        </Link>
      ) : (
        <img
          src={image}
          alt="Banner de ofertas"
          className="w-7xl h-auto object-cover my-5 mx-auto"
        />
      )}
    </div>
  );
}
