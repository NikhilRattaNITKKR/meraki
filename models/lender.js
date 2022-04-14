import { Types, Schema, model, models } from "mongoose";

const lenderSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },

  education: {
    type: String,
    // required:true,
    enum: Education,
  },

  loanType: {
    type: [String],
    required: true,
    enum: LoanType,
  },
  maxExpectedROI: {
    type: Number,
    required: true,
    min: [0, "Expected ROI cant be less than 0"],
  },
  minExpectedROI: {
    type: Number,
    required: true,
    min: [0, "Expected ROI cant be less than 0"],
  },
  maxLoanAmount: {
    type: Number,
    required: true,
    min: [0, "Loan Amount cant be less than 0"],
  },
  minLoanAmount: {
    type: Number,
    required: true,
    min: [0, "Loan Amount cant be less than 0"],
  },
  loanReason: {
    type: [String],
    required: true,
  },
  minDuration: {
    //in months
    type: Number,
    required: true,
    min: [0, "Duration cant be less than 0"],
  },
  maxDuration: {
    type: Number,
    required: true,
    min: [0, "Duration cant be less than 0"],
  },
  externalLinks: {
    type: String,
  },
  matches: {
    type: [
      {
        type: Types.ObjectId,
      },
    ],
    default:[],
  },
});

export default models.Lender || model("Lender", lenderSchema);
