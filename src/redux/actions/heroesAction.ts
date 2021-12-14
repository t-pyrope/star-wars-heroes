import axios from 'axios';
import type { Dispatch } from 'redux';

import { heroesURL } from "../../api";
import { GET_HEROES, LOADING_HEROES, LOADING_HEROES_FAILED } from '../types';

export const getHeroes = (page: string) => async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: LOADING_HEROES })

    await axios.get(heroesURL(page))
        .then(res => {
            dispatch({
                type: GET_HEROES,
                payload: {
                    heroes: res.data.results,
                    totalPages: Math.floor(res.data.count / 10),
                }
            })
        }).catch(e => {
            console.error(e);
            dispatch({ type: LOADING_HEROES_FAILED })
        })
}
