// import create from "zustand";

import { create } from "zustand";

interface BookingState {
  bookings: number[];
  addBooking: (id: number) => void;
}

export const useBookingsStore = create<BookingState>((set:any) => ({
  bookings: [],
  addBooking: (id:any) =>
    set((state:any) => ({ bookings: [...state.bookings, id] })),
}));
