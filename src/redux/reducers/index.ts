import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import heroesReducer from './heroesReducer';
import filmsReducer from './filmsReducer';
import starshipsReducer from './starshipsReducer';

const rootReducer = combineReducers({
    hero: heroReducer,
    heroes: heroesReducer,
    films: filmsReducer,
    starships: starshipsReducer,
})

export default rootReducer;
