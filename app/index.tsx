import { View, FlatList } from "react-native";
import { router } from "expo-router";

import useChannels from "../src/hooks/useChannels";
import ChannelCard from "../src/components/ChannelCard";
import Loader from "../src/components/Loader";

export default function Home() {

  const { channels, loading } = useChannels();

  if (loading) return <Loader />;

  return (
    <View>
      <FlatList
        data={channels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChannelCard
            channel={item}
            onPress={() =>
              router.push({
                pathname: "/player",
                params: { channel: JSON.stringify(item) }
              })
            }
          />
        )}
      />
    </View>
  );
}