import axios from 'axios'
import type { Dispatch } from 'redux';

import { GET_FILMS, LOADING_FILMS, LOADING_FILMS_FAILED } from '../types';

export const getFilms = (ids: string[]) => async(dispatch: Dispatch): Promise<void> => {
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
