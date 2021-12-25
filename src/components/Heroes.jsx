import React from "react";
import Hero from "./Hero";
import { useSelector} from "react-redux";
import './Heroes.css';
export default function Heroes() {
  
    const heroes = useSelector(state => state.heroes.heroes);
    const displayHero = useSelector(state => state.heroes.displayHero);
  return (
    <div className="heroes-container">

      {displayHero !== null ? 
        <div className="display-hero">
          <img src={displayHero.imgUrl} alt={displayHero.imgUrl} className="hero-img-md"/>
            <p className="hero-name">{displayHero.heroName}</p>
            <p className="real-name">{displayHero.realName}</p>
            <div className="hero-description">
              <p>{displayHero.description}</p>
            </div>
        </div>: null}

      
      {heroes.map(hero => (
        <Hero
          key= {hero.id}
          id= {hero.id}
          heroName={hero.heroName}
          realName={hero.realName}
          imgUrl={hero.imgUrl}
          hero={hero}
        />
      ))}
    </div>
  );
}

