import { AnyAction } from "redux";

import { GET_HERO, HeroState, LOADING_HERO, LOADING_HERO_FAILED } from "../types";

const initState: HeroState = { heroName: '', isLoading: false, isError: false}

const heroReducer = (state: HeroState = initState, action: AnyAction) => {
    switch(action.type){
        case GET_HERO:
            return {
                ...state,
                heroName: action.payload.heroName,
                isLoading: false,
                isError: false,
            }
        case LOADING_HERO:
            return {
                ...state,
                heroName: '',
                isLoading: true,
                isError: false
            }
        case LOADING_HERO_FAILED:
            return {
                ...state,
                heroName: '',
                isLoading: false,
                isError: true,
            }
        default:
            return {...state}
    }
}

export default heroReducer;
