const baseURL = 'https://swapi.dev/api';

export const heroesURL = (page = "1"): string => `${baseURL}/people/?page=${page}`;

export const heroURL = (heroId: string): string => `${baseURL}/people/${heroId}`;
