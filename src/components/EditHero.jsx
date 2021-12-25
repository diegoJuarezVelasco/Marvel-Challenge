import React from "react";
import { useState } from "react";
import "./EditHero.css";
import { editHeroAction } from "../actions/heroesActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function EditHero() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newHero, setNewHero] = useState({
    id: params.id
  });

  const handleChange = (e) => {
    setNewHero({
      ...newHero,
      [e.target.name]: e.target.value,
    });
  };
  const submitHeroToEdit = (e) => {
    e.preventDefault();
    dispatch(editHeroAction(newHero));
    navigate("/");
  };

  return (
    <div className="edit-hero">
        {newHero.imgUrl !== null ? <img src={newHero.imgUrl} alt={newHero.imgUrl} className="hero-img-md"/> : null}


      <div className="form-container">
        <form onSubmit={submitHeroToEdit}>
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
