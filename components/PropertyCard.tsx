import React from "react";
import { View, Text, Image, Button } from "react-native";
import { Link } from "expo-router";

interface PropertyCardProps {
  id: number;
  name: string;
  location: string;
  image: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  name,
  location,
  image,
}) => (
  <Link href={`/property/${id}`}>
    <View className="p-4 border rounded mb-2">
      <Image source={{ uri: image }} className="w-full h-40 rounded" />
      <Text className="text-lg font-bold mt-2">{name}</Text>
      <Text className="text-gray-500">{location}</Text>
    </View>
  </Link>
);
