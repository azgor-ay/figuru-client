import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const UsersProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="text-center p-6">
      <h1
        className="heading py-12"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Your Profile at <span className="heading2">Figuru</span>
      </h1>
      <div className="text-center">
        <img
          src={user?.photoURL}
          className="mx-auto rounded-full py-2"
          data-aos="zoom-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <h4 className="text-3xl font-extrabold">{user?.displayName}</h4>
        <p>{user?.email}</p>
        <div className="badge">
          Using Through : {user?.providerData[0]?.providerId}
        </div>
        <p className="uppercase text-3xl py-5">
          <span className="">using figuru since</span> <br />
          <span
            className="font-bold"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {user?.metadata?.creationTime}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UsersProfile;
