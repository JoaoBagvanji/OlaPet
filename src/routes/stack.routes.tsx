import React from "react";
import colors from "../styles/colors";
import { Inicial } from "../pages/Inicial";
import { createStackNavigator } from "@react-navigation/stack";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PetSelect } from "../pages/PetSelect";

const StackRoutes = createStackNavigator();
const AppRoutes: React.FC = () =>(
    <StackRoutes.Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor:colors.white},}}>

        <StackRoutes.Screen name="Inicial" component={Inicial}/>

        <StackRoutes.Screen name="UserIdentification" component={UserIdentification}/>

        <StackRoutes.Screen name="Confirmation" component={Confirmation}/>

        <StackRoutes.Screen name="PetSelect" component={PetSelect}/>

    </StackRoutes.Navigator>
)

export default AppRoutes;