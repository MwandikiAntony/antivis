import React, { createContext, useState, useEffect } from "react";
import { getFavorites, saveFavorites } from "../services/favoritesService";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  const toggleFavorite = async (channel) => {
    let updated;

    if (favorites.find(c => c.id === channel.id))
      updated = favorites.filter(c => c.id !== channel.id);
    else
      updated = [...favorites, channel];

    setFavorites(updated);
    await saveFavorites(updated);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};