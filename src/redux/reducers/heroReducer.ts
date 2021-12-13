import { AnyAction } from "redux";

import { GET_HERO, HeroState, LOADING_HERO, LOADING_HERO_FAILED } from "../types";

const initState: HeroState = {
    heroName: '',
    birthYear: '',
    films: [],
    starships: [],
    isLoading: false,
    isError: false
}

const heroReducer = (state: HeroState = initState, action: AnyAction) => {
    switch(action.type){
        case GET_HERO:
            return {
                ...state,
                heroName: action.payload.heroName,
                birthYear: action.payload.birthYear,
                films: action.payload.films,
                starships: action.payload.starships,
                isLoading: false,
                isError: false,
            }
        case LOADING_HERO:
            return {
                ...state,
                heroName: '',
                birthYear: '',
                films: [],
                starships: [],
                isLoading: true,
                isError: false
            }
        case LOADING_HERO_FAILED:
            return {
                ...state,
                heroName: '',
                birthYear: '',
                films: [],
                starships: [],
                isLoading: false,
                isError: true,
            }
        default:
            return { ...state }
    }
}

export default heroReducer;
