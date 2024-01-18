import React from "react";

const UserAvater = ({ imageURL }) => {
  return (
    <div className=" flex justify-center items-center">
      <img src={imageURL} alt="" className="rounded-full w-20 h-20" />
    </div>
  );
};

export default UserAvater;
