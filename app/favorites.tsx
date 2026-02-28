import { View, FlatList } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../src/context/FavoritesContext";
import ChannelCard from "../src/components/ChannelCard";

export default function Favorites() {

  const { favorites } = useContext(FavoritesContext);

  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <ChannelCard channel={item} />
        }
      />
    </View>
  );
}