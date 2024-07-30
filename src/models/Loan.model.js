import mongoose, { Schema } from "mongoose";

const loanSchema = new Schema(
  {
    loan_id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    member_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    loan_date: {
      type: Date,
      required: true,
    },
    due_date: {
      type: Date,
      required: true,
    },
    return_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Loan = mongoose.model("Loan", loanSchema);
