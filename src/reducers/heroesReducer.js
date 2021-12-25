import { EDIT_HERO, RETRIEVE_HERO_TO_EDIT, DELETE_HERO, CREATE_HERO, DISPLAY_HERO} from "../types";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  heroes: [
    {
      id: uuidv4(),
      heroName: "Captain America",
      realName: "Steve Rogers",
      imgUrl:
        "https://www.tonica.la/__export/1586802483581/sites/debate/img/2020/04/13/captain_america_portada.jpg_423682103.jpg",
      description:
        "Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics.",
    },
    {
      id: uuidv4(),
      heroName: "Hulk",
      realName: "Bruce Banner",
      imgUrl:
        "https://www.show.news/__export/1578431341389/sites/debate/img/2020/01/07/hulk_x2x_crop1578431017716.jpg_423682103.jpg",
      description:
        "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962).",
    },
    {
      id: uuidv4(),
      heroName: "Iron Man",
      realName: "Tonny Stark",
      imgUrl:
        "https://www.debate.com.mx/__export/1575942534276/sites/debate/img/2019/12/09/iron_man_crop1575942471331.jpg_423682103.jpg ",
      description:
        "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963)",
    },
  ],
  heroToEdit: null,
  heroToDelete: null,
  displayHero:null
};

export function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_HERO_TO_EDIT:
      return {
        ...state,
        heroToEdit: action.payload,
      };
    case EDIT_HERO:
      return {
        ...state,
        heroes: state.heroes.map((hero) =>
          hero.id === action.payload.id ? (hero = action.payload) : hero
        ),
      };
    case DELETE_HERO:
      return {
          ...state,
          heroes: state.heroes.filter(hero => hero.id !== action.payload.id)
          
      };
      case CREATE_HERO: 
        return {
            ...state,
            heroes: [...state.heroes, action.payload]
        };
      case DISPLAY_HERO: 
        return {
            ...state,
            displayHero: action.payload
        };
    default:
      return state;
  }
}
