import React,{createContext,useState,useEffect} from "react";
import {getFavorites,saveFavorites} from "../services/favoritesService";

export const FavoritesContext=createContext();

export const FavoritesProvider=({children})=>{

 const [favorites,setFavorites]=useState([]);

 useEffect(()=>{
   getFavorites().then(setFavorites);
 },[]);

 const toggleFavorite=(channel)=>{
   let updated;

   if(favorites.find(c=>c.id===channel.id)){
     updated=favorites.filter(c=>c.id!==channel.id);
   }else{
     updated=[...favorites,channel];
   }

   setFavorites(updated);
   saveFavorites(updated);
 }

 return(
   <FavoritesContext.Provider value={{favorites,toggleFavorite}}>
     {children}
   </FavoritesContext.Provider>
 )
}