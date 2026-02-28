import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ChannelCard from "../components/ChannelCard";
import { fetchChannels } from "../services/api";
import { router } from "expo-router";

export default function HomeScreen() {

  const [channels,setChannels]=useState([]);

  useEffect(()=>{
    fetchChannels().then(setChannels);
  },[]);

  return (
    <View style={{flex:1,backgroundColor:"#000"}}>

      <FlatList
        data={channels}
        keyExtractor={(i)=>i.id}
        renderItem={({item})=>(
          <ChannelCard
            channel={item}
            onPress={()=>router.push({
              pathname:"/player",
              params:{url:item.url}
            })}
          />
        )}
      />

    </View>
  );
}