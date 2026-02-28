import React from "react";
import {TouchableOpacity,Text,View} from "react-native";

export default function ChannelCard({channel,onPress}) {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={{
        padding:15,
        borderBottomWidth:1
      }}>
        <Text>{channel.name}</Text>
      </View>
    </TouchableOpacity>
  )
}