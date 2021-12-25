import React from "react";
import "./Header.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {IoClose} from "react-icons/io5";

const Header = () => {
  let navigate = useNavigate();
  const location = useLocation();
  
  const redirectNewHero = () => {
    navigate("/newhero");
  };
  const closeHero= () => {
      navigate("/");
  }
  
  return (
    <header>
      <h1 className="header-title">Marvel´s Heroes</h1>
      {location.pathname !== "/" ? (
        <button className="delete-hero" onClick={closeHero}>
          <IoClose/>
        </button>
      ) : (
        <button className="add-hero" onClick={redirectNewHero}>
          <AiOutlinePlus />
        </button>
      )}
    </header>
  );
};

export default Header;
