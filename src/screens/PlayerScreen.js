import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import VideoPlayer from "../components/VideoPlayer";
import { trackEvent } from "../services/analytics";

export default function PlayerScreen(){

  const { url } = useLocalSearchParams();

  trackEvent("PLAY_CHANNEL");

  return (
    <View style={{flex:1,backgroundColor:"#000"}}>
      <VideoPlayer url={url}/>
    </View>
  );
}