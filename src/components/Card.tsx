import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  absolute?: boolean;
  className?: string;
}

const Card = ({ children, title, description, absolute, className }: Props) => {
  return (
    <div
      className={`flex flex-col custom-bg py-6 px-6 text-white relative ${className} group cursor-pointer`}
    >
      <div className="flex-1">{children}</div>
      <div className={`flex justify-between items-end ${!absolute && "mt-4"}`}>
        <div className="font-medium space-y-2">
          <h5 className="text-xs text-primary opacity-45">{description}</h5>
          <h2 className="text-xl">{title}</h2>
        </div>
        <Link
          to="#"
          className={`${
            absolute && "absolute right-6 bottom-8"
          } opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out`}
        >
          <img
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
            alt="link button"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
