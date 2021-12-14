import axios from 'axios';
import type { Dispatch } from 'redux';

import { heroURL } from "../../api";
import { GET_HERO, LOADING_HERO, LOADING_HERO_FAILED } from "../types";

export const getHero = (heroId: string) => async(dispatch: Dispatch): Promise<void> => {
    dispatch({ type: LOADING_HERO })

    axios.get(heroURL(heroId))
        .then(res => {
            dispatch({
                type: GET_HERO,
                payload: {
                    heroName: res.data.name,
                    birthYear: res.data.birth_year,
                    films: res.data.films,
                    starships: res.data.starships,
                }
            })
        }).catch(e => {
            console.error(e);
            dispatch({ type: LOADING_HERO_FAILED })
        })
}
