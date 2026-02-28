import { View, Text, TouchableOpacity } from "react-native";

export default function ChannelCard({ channel, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        padding:20,
        margin:10,
        backgroundColor:"#222"
      }}>
        <Text style={{color:"#fff"}}>
          {channel.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}