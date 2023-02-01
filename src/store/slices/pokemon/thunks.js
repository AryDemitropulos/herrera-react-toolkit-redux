import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    const pokemons = resp.data.results;

    dispatch(setPokemons({ pokemons, page: page + 1 }));
  };
};
