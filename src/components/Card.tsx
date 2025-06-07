import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  absolute?: boolean;
  worksCard?: boolean;
  className?: string;
  link?: string;
  nolink?: boolean;
  noNewTab?: boolean;
}

const Card = ({
  children,
  title,
  description,
  absolute,
  worksCard,
  link,
  nolink,
  noNewTab,
  className,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`${
        worksCard ? "p-4" : "py-6 px-6"
      } flex flex-col custom-bg  text-white relative ${className} group  `}
    >
      <Link
        to={link || "#"}
        target={nolink || noNewTab ? "_self" : "_blank"}
        className={`group relative ${nolink ? "cursor-default" : ""}`}
      >
        <div className="flex-1 overflow-hidden">{children}</div>
        <div
          className={`flex justify-between items-end ${!absolute && "mt-4"}`}
        >
          <div
            className={`${worksCard ? "space-y-0" : "space-y-2"} font-medium `}
          >
            <h5
              className={`${
                worksCard ? "text-sm" : "text-xs"
              }  text-primary opacity-45`}
            >
              {description}
            </h5>
            <h2 className="text-xl">{title}</h2>
          </div>
          {nolink ? null : (
            <Link
              to={link || "#"}
              target="_blank"
              className={`${
                absolute && "absolute right-6 bottom-8"
              } opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out`}
            >
              <img
                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                alt="link button"
              />
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
