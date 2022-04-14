import { Mongoose, Schema, model, models } from "mongoose";

import { Married,LoanType,Education,Occupation } from "../utils/enum";

const borrowerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  age:{
    type:Number,
    required:true,
  },
  annualIncome:{
    type:Number,
    required:true,
  },
  education:{
    type:String,
    required:true,
    enum: Education
  },
  creditScore:{
    type:Number,
    required:true,
    min:[300,"CIBIL score cant be less than 300"],
    max:[900,"CIBIL score cant be greater than 900"]
  },
  loanType:{
    type:String,
    required:true,
    enum:LoanType
  },
  maxExpectedROI:{
    type:Number,
    required:true,
    min:[0,"Expected ROI cant be less than 0"],
  },
  minExpectedROI:{
    type:Number,
    required:true,
    min:[0,"Expected ROI cant be less than 0"],
  },
  maxLoanAmount:{
    type:Number,
    required:true,
    min:[0,"Loan Amount cant be less than 0"],
  },
  minLoanAmount:{
    type:Number,
    required:true,
    min:[0,"Loan Amount cant be less than 0"],
  },
  loanReason:{
    type:String,
    required:true,
  },
  minDuration:{                                        //in months
    type:Number,
    required:true,
    min:[0,"Duration cant be less than 0"],
  },maxDuration:{
    type:Number,
    required:true,
    min:[0,"Duration cant be less than 0"],
  },
  occupation:{
    type:String,
    required:true,
    enum:Occupation
  },
  married:{
    type:String,
    required:true,
    enum:Married
  },
  dependents:{
    type:Number,
    required:true,
    min:[0,"dependents cant be less than 0"]
  },
  externalLinks:{
    type:String
  }

  
});

export default models.Borrower || model("Borrower", borrowerSchema);


// ## 

// 1. Age 
// 2. credit score 
// 3. Occupation
// 4. Annual Income 
// 5. Name
// 6. Type of loan
// 7. Maximum Expected rate of interest 
// 8. MInimum Expected ROI
// 9. maximum Loan amount
// 10. Minimum Loan amount  
// 11. Maximum Loan duration
// 12. Minimum Loan duration
// 13. linked profile 
// 14. what will you do with this amount?
// 15. married 
// 16. education
// 17. dependents

// ## For verfication

// 1. PAN card 
// 2. Aadhar verification