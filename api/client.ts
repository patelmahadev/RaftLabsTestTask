import { QueryClient } from "@tanstack/react-query";


const API_BASE_URL = "http://192.168.0.131:3000";

export interface Property {
  title: any;
  price: any;
  images: any;
  id: number;
  name: string;
  location: string[];
  features: string[];
}

export interface Booking {
  id: number;
  propertyId: number;
  name: string;
  location: string;
}

export interface Profile {
  id: number | string;
  name: string;
  email: string;
  bookings: string[];
}

export const queryClient = new QueryClient()
export async function fetchProperties(): Promise<Property[]> {
  return fetch(`${API_BASE_URL}/properties`).then((res) => res.json());
}

export async function fetchProperty(propertyId: number): Promise<Property> {
  return fetch(`${API_BASE_URL}/properties/${propertyId}`).then((res) => res.json());
}

export async function fetchBookings(): Promise<Booking[]> {
  return fetch(`${API_BASE_URL}/bookings`).then((res) => res.json());
}

export async function fetchProfile(): Promise<Profile[]> {
  return fetch(`${API_BASE_URL}/profile`).then((res) => res.json());
}

export async function createBooking(bookingData: Partial<Booking>): Promise<Booking> {
  return fetch(`${API_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  }).then((res) => res.json());
}
