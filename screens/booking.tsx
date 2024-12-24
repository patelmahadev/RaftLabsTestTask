import React from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchBookings } from "@/api/client";
import tw from "tailwind-react-native-classnames";

type Booking = {
  id: string;
  propertyId: string;
  userId?: string;
  checkIn?: string;
  checkOut?: string;
  status?: string;
  location?: {
    address: string;
    city: string;
    state: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  title?: string;
};

export default function Bookings() {
  const { data: bookings, isLoading, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });

  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={tw`text-lg mt-4`}>Loading bookings...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
        <Text style={tw`text-lg text-red-500 text-center`}>
          Error loading bookings: {error.message}
        </Text>
      </View>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
        <Text style={tw`text-lg text-gray-500`}>No bookings yet!</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bookings}
        renderItem={({ item }: { item: Booking }) => (
          <View style={tw`bg-white rounded-lg p-4 mb-4 shadow`}>
            <Text style={tw`text-lg font-bold text-gray-800`}>
              Booking ID: {item.id}
            </Text>
            {item.title && (
              <Text style={tw`text-base text-gray-600`}>Title: {item.title}</Text>
            )}
            <Text style={tw`text-base text-gray-600`}>
              Property ID: {item.propertyId}
            </Text>
            {item.location && (
              <>
                <Text style={tw`text-base text-gray-600`}>
                  Location: {item.location.city}, {item.location.state}
                </Text>
                <Text style={tw`text-base text-gray-600`}>
                  Address: {item.location.address}
                </Text>
              </>
            )}
            {item.checkIn && (
              <Text style={tw`text-base text-gray-600`}>Check-in: {item.checkIn}</Text>
            )}
            {item.checkOut && (
              <Text style={tw`text-base text-gray-600`}>Check-out: {item.checkOut}</Text>
            )}
            {item.status && (
              <Text
                style={tw`text-base font-bold mt-2 ${
                  item.status === "confirmed" ? "text-green-500" : "text-orange-500"
                }`}
              >
                Status: {item.status}
              </Text>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`pb-24`}
      />
    </View>
  );
}
