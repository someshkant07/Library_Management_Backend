import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookSchema = new Schema(
  {
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    publication_date: {
      type: Date,
      required: true,
    },
    copies_available: {
      type: Number,
      reqired: true,
      default: 1,
      min: 0,
    },
  },
  { timestamps: true }
);

bookSchema.plugin(mongooseAggregatePaginate);

export const Book = mongoose.model("Book", bookSchema);
