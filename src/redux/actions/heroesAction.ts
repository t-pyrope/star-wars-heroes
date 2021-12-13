import axios from 'axios';

import { GET_HEROES, LOADING_HEROES, LOADING_HEROES_FAILED } from '../types';
import { heroesURL } from "../../api";
import { Dispatch } from 'redux';

export const getHeroes = (page: string) => async (dispatch: Dispatch) => {
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
