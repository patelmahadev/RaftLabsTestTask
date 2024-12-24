import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView as GestureScrollView,
} from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { createBooking } from "@/api/client";

export default function PropertyDetails({ navigation, route }: any) {
  const { property } = route?.params;

  // Mutation for booking
  const bookingMutation = useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      console.log("Booking successful:", data);
      navigation.navigate("Booking", { property });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
      alert("Failed to book the property. Please try again.");
    },
  });

  const handlePress = () => {
    const bookingData = {
      propertyId: property.id,
      location: property.location,
      title: property.title,
    };

    bookingMutation.mutate(bookingData);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.detailsContainer}>
          <GestureScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageCarousel}
          >
            {property.images.map((imageUri: string, index: number) => (
              <Image
                key={index}
                source={{ uri: imageUri }}
                style={styles.image}
              />
            ))}
          </GestureScrollView>

          <Text style={styles.title}>{property.title}</Text>
          <Text style={styles.location}>
            {property.location.city}, {property.location.state}
          </Text>
          <Text style={styles.address}>{property.location.address}</Text>
          <Text style={styles.price}>${property.price}/month</Text>

          <View style={styles.featuresContainer}>
            {property.features.map((feature: string, index: number) => (
              <Text key={index} style={styles.feature}>
                {feature}
              </Text>
            ))}
          </View>

          <Text style={styles.description}>{property.description}</Text>

          <TouchableOpacity
            style={styles.bookButton}
            onPress={handlePress}
          >
            <Text style={styles.bookButtonText}>
              {"Book Property"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  imageCarousel: {
    height: 220,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 220,
    marginRight: 15,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    color: "#666",
  },
  address: {
    fontSize: 16,
    color: "#777",
    marginVertical: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff7f50",
    marginVertical: 12,
  },
  featuresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  feature: {
    fontSize: 14,
    color: "#555",
    marginRight: 15,
    marginBottom: 5,
    padding: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginTop: 10,
  },
  bookButton: {
    height:60,
    backgroundColor: "#ff7f50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
