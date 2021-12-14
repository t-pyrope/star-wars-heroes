import { combineReducers } from 'redux';

import filmsReducer from './filmsReducer';
import heroReducer from './heroReducer';
import heroesReducer from './heroesReducer';
import starshipsReducer from './starshipsReducer';

const rootReducer = combineReducers({
    hero: heroReducer,
    heroes: heroesReducer,
    films: filmsReducer,
    starships: starshipsReducer,
})

export default rootReducer;
