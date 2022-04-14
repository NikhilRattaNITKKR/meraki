// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../utils/db";
import nextConnect from "next-connect";
import Borrower from "../../models/borrower";

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    await connectDB();

    const { email, id } = req.query;
    let borrower;
    if (!email) {
      borrower = await Borrower.findById(id).populate({
        model: "Lender",
        path: "notification.id",
      });

      
    }

    borrower = await Borrower.findOne({ email })
    .populate({
        model: "Lender",
        path: "notification.id",
      });

      

    if (!borrower) {
      return res.status(404).json({ msg: "No such borrower Exists" });
    }

    let notifications=borrower.notification;
    borrower.notification=null;

    return res.status(200).json({ borrower,notifications });
  } catch (e) {
    console.log(e);
  }
});

handler.post(async (req, res) => {
  try {
    await connectDB();

    const data = req.body;

    let borrower = new Borrower(data);
    await borrower.save();

    return res.status(201).json({
      msg: "Borrower Created Successfully",
    });
  } catch (e) {
    console.log(e);
  }
});

export default handler;
