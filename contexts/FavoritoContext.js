// FavoritosContext.js
import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (dica) => {
    setFavoritos((prevFavoritos) => {
      //Para evitar que uma dica que foi favoritada se repita
      if (!prevFavoritos.some(fav => fav.dica === dica.dica)) {
        return [...prevFavoritos, dica];
      }
      return prevFavoritos;
    });
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
