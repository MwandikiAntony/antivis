import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Video from "react-native-video";
import colors from "../theme/colors";

const ChannelScreen = ({ route }) => {
  const { channel } = route.params;

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: channel.streamUrl }}
        style={styles.video}
        controls
        resizeMode="contain"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{channel.name}</Text>
        <Text style={styles.category}>{channel.category}</Text>
      </View>
    </View>
  );
};

export default ChannelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: 250,
  },
  info: {
    padding: 20,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "700",
  },
  category: {
    color: colors.textSecondary,
    marginTop: 5,
  },
});
