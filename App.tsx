import React from "react";
import { Inicial } from "./src/pages/Inicial";
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import  Apploading  from "expo-app-loading";
import { UserIdentification } from "./src/pages/UserIdentification";
import { Confirmation } from "./src/pages/Confirmation";
import Routes from "./src/routes";
export default function App(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return <Apploading />
  
  return(
    <Routes/>
  )
}