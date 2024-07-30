import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    reservation_id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    member_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reservation_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);
