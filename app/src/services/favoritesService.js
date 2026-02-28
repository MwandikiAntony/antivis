import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY="favorites";

export const getFavorites=async()=>{
 const data=await AsyncStorage.getItem(KEY);
 return data?JSON.parse(data):[];
}

export const saveFavorites=async(list)=>{
 await AsyncStorage.setItem(KEY,JSON.stringify(list));
}