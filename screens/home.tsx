import React from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSearchStore } from "@/store/searchStore";
import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "@/api/client";
import  tw  from "tailwind-react-native-classnames";

interface Location {
  address: string;
  city: string;
  state: string;
}

interface Property {
  id: string;
  title: string;
  price: number;
  location: Location;
  features: string[];
  images: string[];
}

export default function Home({ navigation }: any) {
  const { query, setQuery } = useSearchStore();

  const { isLoading, error, data } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  const filteredBookings = data
    ? data.filter((property) => {
        const lowerQuery = query.toLowerCase();
        return (
          property.title.toLowerCase().includes(lowerQuery) ||
          property.price.toString().includes(lowerQuery) ||
          `${property.location?.city}, ${property.location?.state}`
            .toLowerCase()
            .includes(lowerQuery)
        );
      })
    : [];

  const handleCardPress = (property: Property) => {
    navigation.navigate("PropertyDetails", { property });
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading properties</Text>;
  }

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <View style={tw`mb-4`}>
        <TextInput
          style={tw`h-12 border border-gray-300 rounded-lg px-4 bg-white text-base text-gray-800`}
          placeholder="Search by title, price, or location..."
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <FlatList
        data={filteredBookings}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row bg-white rounded-lg mb-3 p-3 shadow-md`}
            onPress={() => handleCardPress(item)}
          >
            <Image
              source={{ uri: item.images[0] }}
              style={tw`w-28 h-28 rounded-lg mr-4`} 
            />
            <View style={tw`flex-1 justify-between`}>
              <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
              <Text style={tw`text-sm text-gray-500`}>
                {item.location.city}, {item.location.state}
              </Text>
              <View style={tw`mt-2`}>
                <Text style={tw`text-base font-bold`}>
                  Price: ${item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
