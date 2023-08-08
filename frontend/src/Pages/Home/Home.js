import React from "react";
import Manufacturer from "./Manufacturer";
import Transporter from "./Transporter";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);
  return (
    <div>
      
      {user?.result?.type === "manufacturer" ? (
        <Manufacturer user={user} />
      ) : (
        <Transporter />
      )}
    </div>
  );
};

export default Home;
