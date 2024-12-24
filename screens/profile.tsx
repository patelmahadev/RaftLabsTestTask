import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";
import ProfileImg from "@/assets/images/svg/ProfileImg";
import { fetchProfile } from "@/api/client";
import tw from "tailwind-react-native-classnames";

type Profile = {
  id: string;
  name: string;
  email: string;
  bookings: string[];
};

const Profile = () => {
  const { isLoading, error, data } = useQuery<Profile>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={tw`text-lg text-gray-600`}>Loading profile...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
        <Text style={tw`text-lg text-red-600`}>
          Error fetching profile: {error.message}
        </Text>
      </View>
    );
  }

  const { name, email, bookings } = data as Profile;

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <View style={tw`items-center p-6 bg-white shadow-md rounded-b-lg`}>
        <ProfileImg style={tw`w-24 h-24 rounded-full mb-4`} />
        <Text style={tw`text-xl font-bold text-gray-800`}>{name}</Text>
        <Text style={tw`text-base text-gray-600 mt-1`}>{email}</Text>
      </View>

      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-lg font-semibold text-gray-800 mb-3`}>
          Bookings
        </Text>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <View
              key={index}
              style={tw`bg-gray-200 p-4 rounded-lg mb-2 shadow-sm`}
            >
              <Text style={tw`text-base text-gray-700`}>{booking}</Text>
            </View>
          ))
        ) : (
          <Text style={tw`text-base text-gray-500 text-center`}>
            No bookings available
          </Text>
        )}
      </View>
    </View>
  );
};

export default Profile;
