import axios from 'axios';
import { Dispatch } from 'redux';

import { GET_HERO, LOADING_HERO, LOADING_HERO_FAILED } from "../types";
import { heroURL } from "../../api";

export const getHero = (heroId: string) => async(dispatch: Dispatch) => {
    dispatch({ type: LOADING_HERO })

    axios.get(heroURL(heroId))
        .then(res => {
            dispatch({
                type: GET_HERO,
                payload: {
                    heroName: res.data.name
                }
            })
        }).catch(e => {
            console.error(e);
            dispatch({ type: LOADING_HERO_FAILED })
        })
}