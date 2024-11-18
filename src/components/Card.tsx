import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const Card = ({ children, title, description, className }: Props) => {
  return (
    <div className={`custom-bg p-6 text-white relative ${className}`}>
      {children}
      <div className="flex justify-between mt-4">
        <div className="font-medium">
          <h5 className="text-xs text-[#bcbcbc]">{description}</h5>
          <h2 className="text-xl">{title}</h2>
        </div>
        <Link to="#">
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
