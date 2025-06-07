import Card from "../Card";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const ProfilesCard = () => {
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay="150"
      title="Profiles"
      description="STAY WITH ME"
      link="/works"
      noNewTab
    >
      <div className="flex gap-5 justify-around custom-bg px-4 py-6 shadow-lg">
        <Link
          to="https://linkedin.com/in/leul-berhanu/"
          className="gradient-transition hover:text-blue-600 transition-all duration-200"
        >
          <FaLinkedin className="size-20 p-6" />
        </Link>
        {/* <Link
          to="https://wa.me/"
          className="gradient-transition hover:text-black transition-all duration-200"
        >
          <FaWhatsapp className="size-20 p-6" />
        </Link> */}
        <Link
          to="https://github.com/LeulBerhanu"
          className="gradient-transition hover:text-gray-800 transition-all duration-200"
        >
          <BsGithub className="size-20 p-6" />
        </Link>
      </div>
    </Card>
  );
};

export default ProfilesCard;
