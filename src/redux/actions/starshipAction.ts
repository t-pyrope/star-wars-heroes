import axios from 'axios';
import type { Dispatch } from "redux";

import { GET_STARSHIPS, LOADING_STARSHIPS, LOADING_STARSHIPS_FAILED } from "../types";

export const getStarships = (urls: string[]) => async(dispatch:Dispatch): Promise<void> => {
    dispatch({ type: LOADING_STARSHIPS });

    const starships: string[] = []
    Promise.all(urls.map(url =>
        axios.get(url)
        .then(res => {
            starships.push(res.data.name)
        })
    )).then(() => {
        dispatch({
            type: GET_STARSHIPS,
            payload: { starships }
        })
    }).catch(e => {
        console.error(e);
        dispatch({ type: LOADING_STARSHIPS_FAILED })
    })
}
