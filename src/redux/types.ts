export const GET_HEROES = 'GET_HEROES';
export const LOADING_HEROES = 'LOADING_HEROES';
export const LOADING_HEROES_FAILED = 'LOADING_HEROES_FAILED';

export const GET_HERO = 'GET_HERO';
export const LOADING_HERO = 'LOADING_HERO';
export const LOADING_HERO_FAILED = 'LOADING_HERO_FAILED';

export const GET_FILMS = 'GET_FILM';
export const LOADING_FILMS = 'LOADING_FILM';
export const LOADING_FILMS_FAILED = 'LOADING_FILM_FAILED';

export const GET_STARSHIPS = 'GET_STARSHIPS';
export const LOADING_STARSHIPS = 'LOADING_STARSHIPS';
export const LOADING_STARSHIPS_FAILED = 'LOADING_STARSHIPS_FAILED';

interface StateBase {
    isLoading: boolean,
    isError: boolean
}

export interface HeroState extends StateBase {
    heroName: string,
    birthYear: string,
    films: string[],
    starships: string[],
}

export type HeroFromAPIType = {
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

export interface HeroesState extends StateBase {
    heroes: HeroFromAPIType[],
    totalPages: number,
}

export interface FilmsState extends StateBase {
    films: string[],
}

export interface StarshipsState extends StateBase {
    starships: string[],
}

export type RootState = {
    hero: HeroState,
    heroes: HeroesState,
    films: FilmsState,
    starships: StarshipsState,
}
