import { View, ActivityIndicator, Text } from "react-native";
import { Video } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function Player() {

  const params = useLocalSearchParams();
  const channel = JSON.parse(params.channel as string);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>

      <Video
        source={{ uri: channel.streamUrl }}
        style={{ flex: 1 }}
        useNativeControls
        shouldPlay
        resizeMode="contain"
        onLoadStart={() => setLoading(true)}
        onReadyForDisplay={() => setLoading(false)}
        onError={() => setError(true)}
      />

      {loading && <ActivityIndicator size="large" color="#fff" />}

      {error && (
        <Text style={{ color: "white", textAlign: "center" }}>
          Stream unavailable
        </Text>
      )}

    </View>
  );
}