import { useEffect, useState } from "react";
import { getChannels } from "../services/api";

export default function useChannels() {
  const [channels,setChannels]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    getChannels().then(data=>{
      setChannels(data);
      setLoading(false);
    });
  },[]);

  return {channels,loading};
}