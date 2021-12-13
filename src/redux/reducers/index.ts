import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import heroesReducer from './heroesReducer';
import filmsReducer from './filmsReducer';

const rootReducer = combineReducers({
    hero: heroReducer,
    heroes: heroesReducer,
    films: filmsReducer,
})

export default rootReducer;
