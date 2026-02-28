import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import colors from "../theme/colors";

const ChannelCard = ({ channel, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.name}>{channel.name}</Text>
        <Text style={styles.category}>{channel.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChannelCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 12,
    marginVertical: 6,
    marginHorizontal: 12,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  category: {
    color: colors.textSecondary,
    marginTop: 4,
  },
});
