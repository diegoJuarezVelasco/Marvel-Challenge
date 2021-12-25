import React from 'react';
import './Hero.css';
import { IoMdClose } from 'react-icons/io';
import { MdModeEditOutline } from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {retrieveHeroToEditAction} from '../actions/heroesActions';
import { deleteHeroAction } from '../actions/heroesActions';
import { displayHeroAction } from '../actions/heroesActions';

export default function Heroe({ heroName, realName, imgUrl, id, hero}) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectEdition = hero => {
    dispatch(retrieveHeroToEditAction(hero))
    navigate(`/editHero/${hero.id}`)

  }
  const deleteHero = hero => {
    dispatch(deleteHeroAction(hero));
  }
  const displayHero= () => {
    dispatch(displayHeroAction(hero));
  }


  return (   
    <div className="hero-card" onClick={displayHero}>
      <div className="hero-info">
        <img src={imgUrl} alt={imgUrl} className="hero-img" />
        <div className="hero-names">
          <p className="hero-name">{heroName}</p>
          <p className="real-name">{realName}</p>
        </div>
      </div>

      <div className="hero-buttons">
        <button className="edit-button" onClick={()=> {redirectEdition(hero)}}>
          <MdModeEditOutline/>
        </button>
        <button className="delete-button" onClick={(()=> {deleteHero(hero)})}>
          <IoMdClose/>
        </button>
      </div>
    </div>
  );
}
