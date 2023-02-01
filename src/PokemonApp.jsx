import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  console.log(pokemons);
  console.log(isLoading);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handleClick = () => {
    dispatch(getPokemons(page));
  };
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>
      <ul>
        {pokemons.map(({ name, url }) => (
          <li key={name}>{name} </li>
        ))}
      </ul>
      <button onClick={handleClick}> Next</button>
    </>
  );
};
