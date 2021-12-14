import type { AnyAction } from "redux"

import type { StarshipsState } from "../types";
import { GET_STARSHIPS, LOADING_STARSHIPS, LOADING_STARSHIPS_FAILED } from "../types"

const initState: StarshipsState = {
    starships: [],
    isLoading: false,
    isError: false,
}

const starshipsReducer = (state: StarshipsState = initState, action: AnyAction): StarshipsState => {
    switch(action.type){
        case GET_STARSHIPS:
            return {
                ...state,
                starships: action.payload.starships,
                isLoading: false,
                isError: false,
            };
        case LOADING_STARSHIPS:
            return {
                ...state,
                starships: [],
                isLoading: true,
                isError: false,
            }
        case LOADING_STARSHIPS_FAILED:
            return {
                ...state,
                starships: [],
                isLoading: false,
                isError: true,
            }
        default:
            return { ...state }
    }
}

export default starshipsReducer;
