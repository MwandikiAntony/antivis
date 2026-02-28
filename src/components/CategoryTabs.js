import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../theme/colors";

const categories = ["All", "News", "Entertainment", "Sports"];

const CategoryTabs = ({ selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.tab,
            selected === cat && { backgroundColor: colors.primary },
          ]}
          onPress={() => onSelect(cat)}
        >
          <Text
            style={[
              styles.text,
              selected === cat && { color: "#000" },
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: colors.card,
    borderRadius: 20,
        marginRight: 10,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
});

