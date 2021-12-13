import { Dispatch } from 'redux';
import axios from 'axios'

import { GET_FILMS, LOADING_FILMS, LOADING_FILMS_FAILED } from '../types';

export const getFilms = (ids: string[]) => async(dispatch: Dispatch) => {
    dispatch({ type: LOADING_FILMS });
    const films: string[] = []
    Promise.all(ids.map(id =>
        axios.get(id)
        .then(res => {
            films.push(res.data.title)
        })
    )).then(() => {
        dispatch({
            type: GET_FILMS,
            payload: { films }
        })
    }).catch(e => {
        console.error(e);
        dispatch({ type: LOADING_FILMS_FAILED })
    })
}
