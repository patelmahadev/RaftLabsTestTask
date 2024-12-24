import React from "react";
import { TextInput, View } from "react-native";
import { useSearchStore } from "../store/searchStore";

export const SearchBar = () => {
  const { query, setQuery } = useSearchStore();

  return (
    <View className="mb-4">
      <TextInput
        className="border p-2 rounded"
        placeholder="Search properties..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
    </View>
  );
};
