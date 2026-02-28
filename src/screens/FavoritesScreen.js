import { useContext } from "react";
import { View, FlatList } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";
import ChannelCard from "../components/ChannelCard";

export default function FavoritesScreen(){

  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={{flex:1,backgroundColor:"#000"}}>
      <FlatList
        data={favorites}
        keyExtractor={(i)=>i.id}
        renderItem={({item})=>
          <ChannelCard channel={item}/>
        }
      />
    </View>
  );
}