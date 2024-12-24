import React from "react";
import BottomTabNavigator from "./(tabs)/_layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/client";
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient} >
      <BottomTabNavigator />;
    </QueryClientProvider>
  ) 
  
}

