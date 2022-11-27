import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Link className="start-shopping" to="/shop">
        Shop now!
      </Link>
      <p>Best quality clothes store.</p>
    </div>
  );
};

export default HomePage;
