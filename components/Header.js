import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className="title flex justify-center">
        <span className="text-2xl text-red-600">FSA</span> Weather
      </h1>
      <p>Keep Up To Date With The Latest Weather Around The Globe</p>
    </div>
  );
};

export default Header;
