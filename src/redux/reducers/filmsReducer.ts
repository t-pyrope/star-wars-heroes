import type { AnyAction } from 'redux';

import type { FilmsState} from "../types";
import { GET_FILMS, LOADING_FILMS, LOADING_FILMS_FAILED } from "../types";

const initState: FilmsState = {
    films: [],
    isLoading: false,
    isError: false,
}

const filmsReducer = (state: FilmsState = initState, action: AnyAction): FilmsState => {
    switch(action.type) {
        case GET_FILMS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                films: action.payload.films
            }
        case LOADING_FILMS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                films: []
            }
        case LOADING_FILMS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                films: []
            }
        default:
            return { ...state }
    }
}

export default filmsReducer;
