import { RETRIEVE_HERO_TO_EDIT,
        EDIT_HERO,
        DELETE_HERO,
        CREATE_HERO,
        DISPLAY_HERO
} from "../types"

export const retrieveHeroToEditAction = hero => {
    return {
        type: RETRIEVE_HERO_TO_EDIT,
        payload: hero
    }
}
export const editHeroAction = hero => {
    return {
        type: EDIT_HERO,
        payload: hero
    }

}
export const deleteHeroAction = hero => {
    return {
        type: DELETE_HERO,
        payload: hero
    }
}
export const createHeroAction = hero => {
    return {
        type: CREATE_HERO,
        payload: hero
    }
}
export const displayHeroAction = hero => {
    return {
        type: DISPLAY_HERO,
        payload: hero
    }

}