import React,{useState} from "react";
import {View,ActivityIndicator,Text,StyleSheet} from "react-native";
import { Video } from "expo-av";

export default function PlayerScreen({route}) {

  const {channel}=route.params;
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);

  return(
    <View style={{flex:1,backgroundColor:"#000"}}>

      <Video
        source={{uri:channel.streamUrl}}
        style={{flex:1}}
        useNativeControls
        resizeMode="contain"
        shouldPlay
        onLoadStart={()=>setLoading(true)}
        onReadyForDisplay={()=>setLoading(false)}
        onError={()=>setError(true)}
      />

      {loading && <ActivityIndicator size="large" color="#fff"/>}

      {error && (
        <Text style={styles.error}>
          Stream unavailable
        </Text>
      )}

    </View>
  )
}

const styles=StyleSheet.create({
 error:{color:"#fff",textAlign:"center"}
});