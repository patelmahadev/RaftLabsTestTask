import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "@/assets/color/color";
import TabHome from "@/assets/images/svg/TabHome";
import TabProfile from "@/assets/images/svg/TabProfile";
import { Platform, View, StyleSheet } from "react-native";
import Bookings from "../../screens/booking";
import Profile from "../../screens/profile";
import StackNavigator from "@/navigation/TabsNavigator"; 

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true, 
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 15,
          right: 15,
          borderRadius: 20,
          height: 70,
          borderTopColor: color.black,
          backgroundColor: color.black,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={StackNavigator} 
        options={{
          headerShown: false, 
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              children={<TabHome fillColor={focused ? color.txtOrange : color.white} />}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              children={<TabProfile fillColor={focused ? color.txtOrange : color.white} />}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              children={<TabHome fillColor={focused ? color.txtOrange : color.white} />}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TabBarIcon({ children, focused }: any) {
  return (
    <View
      style={[
        styles.tab,
        {
          backgroundColor: focused ? "white" : "transparent",
          top: Platform.OS === "ios" ? 15 : 15,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: "center",
  },
});
