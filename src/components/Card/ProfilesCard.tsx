import React from "react";
import { CiBasketball } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import Card from "../Card";

const ProfilesCard = () => {
  return (
    <Card title="Profiles" description="STAY WITH ME">
      <div className="flex gap-5 justify-around custom-bg px-4 py-6 shadow-lg">
        <i className="icon--bg">
          <CiBasketball className="icon" />
        </i>
        <i className="icon--bg">
          <FiTwitter className="icon" />
        </i>
      </div>
    </Card>
  );
};

export default ProfilesCard;
