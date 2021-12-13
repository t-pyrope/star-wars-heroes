import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import heroesReducer from './heroesReducer';

const rootReducer = combineReducers({
    hero: heroReducer,
    heroes: heroesReducer,
})

export default rootReducer;
