import { CiBasketball } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import Card from "../Card";
import { Link } from "react-router-dom";

const ProfilesCard = () => {
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay="150"
      title="Profiles"
      description="STAY WITH ME"
    >
      <div className="flex gap-5 justify-around custom-bg px-4 py-6 shadow-lg">
        <Link
          to="#"
          className="gradient-transition hover:text-black transition-all duration-200"
        >
          <CiBasketball className="size-20 p-6" />
        </Link>
        <Link
          to="#"
          className="gradient-transition hover:text-black transition-all duration-200"
        >
          <FiTwitter className="size-20 p-6" />
        </Link>
      </div>
    </Card>
  );
};

export default ProfilesCard;
