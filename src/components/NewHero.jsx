import React from "react";
import { useState } from "react";
import "./EditHero.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createHeroAction } from "../actions/heroesActions";
import { v4 as uuidv4 } from 'uuid';
export default function NewHero() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newHero, setNewHero] = useState({
    id: uuidv4()
  });

  const handleChange = (e) => {
    setNewHero({
      ...newHero,
      [e.target.name]: e.target.value,
    });
  };
  const submitNewHero = (e) => {
    e.preventDefault();
    dispatch(createHeroAction(newHero));
    navigate("/");
  };

  return (
    <div className="edit-hero">
        {newHero.imgUrl !== null ? <img src={newHero.imgUrl} alt={newHero.imgUrl} className="hero-img-md"/> : null}


      <div className="form-container">
        <form onSubmit={submitNewHero}>
          <div className="form-first-row">
            <div className="field">
              <input
                type="text"
                name="realName"
                placeholder="Original Name"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="heroName"
                placeholder="Aka"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-second-row">
            <div className="field">
              <input
                type="text"
                name="imgUrl"
                placeholder="Image URL"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-third-row">
            <div className="field">
              <textarea
                name="description"
                placeholder="Name"
                rows="4"
                cols="50"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
