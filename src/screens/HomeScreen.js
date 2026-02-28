import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { channels } from "../data/channels";
import ChannelCard from "../components/ChannelCard";
import CategoryTabs from "../components/CategoryTabs";
import colors from "../theme/colors";

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredChannels =
    selectedCategory === "All"
      ? channels
      : channels.filter((c) => c.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Antivis TV</Text>
      <Text style={styles.subtitle}>Television, Reimagined</Text>

      <CategoryTabs
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FlatList
        data={filteredChannels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChannelCard
            channel={item}
            onPress={() =>
              navigation.navigate("Channel", { channel: item })
            }
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: "800",
    paddingHorizontal: 16,
  },
  subtitle: {
    color: colors.primary,
    paddingHorizontal: 16,
    marginBottom: 15,
  },
});
