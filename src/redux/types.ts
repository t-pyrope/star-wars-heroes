export const GET_HEROES = 'GET_HEROES';
export const LOADING_HEROES = 'LOADING_HEROES';
export const LOADING_HEROES_FAILED = 'LOADING_HEROES_FAILED';

export const GET_HERO = 'GET_HERO';
export const LOADING_HERO = 'LOADING_HERO';
export const LOADING_HERO_FAILED = 'LOADING_HERO_FAILED';

export type HeroState = {
    heroName: string,
    isLoading: boolean,
    isError: boolean
}

type HeroFromAPIType = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string,
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string,
}

export type HeroesState = {
    heroes: HeroFromAPIType[],
    isLoading: boolean,
    isError: boolean,
}

export type RootState = {
    hero: HeroState,
    heroes: HeroesState,
}
