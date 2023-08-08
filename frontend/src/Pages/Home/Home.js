import React, { useEffect, useState } from "react";
import Manufacturer from "./Manufacturer";
import Transporter from "./Transporter";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      {user &&
        (user?.result?.type === "manufacturer" ? (
          <Manufacturer user={user} />
        ) : (
          <Transporter />
        ))}
    </div>
  );
};

export default Home;
