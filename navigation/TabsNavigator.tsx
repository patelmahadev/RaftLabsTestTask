import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/screens/home";
import PropertyDetails from "@/app/(tabs)/propertyDetails";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
