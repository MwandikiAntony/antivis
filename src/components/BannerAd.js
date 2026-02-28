import React from "react";
import { AdMobBanner } from "expo-ads-admob";

export default function BannerAd(){
 return(
   <AdMobBanner
     bannerSize="smartBannerPortrait"
     adUnitID="ca-app-pub-3940256099942544/6300978111"
   />
 )
}