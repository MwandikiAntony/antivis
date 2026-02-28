import { Video } from "expo-av";
import { useState } from "react";
import Loader from "./Loader";

export default function VideoPlayer({ url }) {

  const [loading,setLoading]=useState(true);

  return (
    <>
      {loading && <Loader/>}

      <Video
        source={{ uri:url }}
        shouldPlay
        resizeMode="contain"
        useNativeControls
        style={{ flex:1 }}
        onLoadStart={()=>setLoading(true)}
        onReadyForDisplay={()=>setLoading(false)}
        onError={(e)=>console.log(e)}
      />
    </>
  );
}