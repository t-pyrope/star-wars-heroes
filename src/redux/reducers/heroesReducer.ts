import { AnyAction } from 'redux';

import { HeroesState, GET_HEROES, LOADING_HEROES, LOADING_HEROES_FAILED } from '../types';

const initState: HeroesState = {
    heroes: [],
    isLoading: false,
    isError: false,
    totalPages: 0,
}

const heroesReducer = (state:HeroesState = initState, action: AnyAction) => {
    switch(action.type){
        case GET_HEROES:
            return {
                ...state,
                heroes: action.payload.heroes,
                isLoading: false,
                isError: false,
                totalPages: action.payload.totalPages,
            }
        case LOADING_HEROES:
            return {
                ...state,
                isError: false,
                isLoading: true,
            }
        case LOADING_HEROES_FAILED:
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        default:
            return { ...state }
    }
}

export default heroesReducer;
