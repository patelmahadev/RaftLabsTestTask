import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import BottomTabNavigator from "./app/(tabs)/_layout";  
import PropertyDetails from "@/app/(tabs)/propertyDetails";  

const Stack = createStackNavigator();  

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="propertyDetails"
          component={PropertyDetails}
          options={{ title: "Property Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
