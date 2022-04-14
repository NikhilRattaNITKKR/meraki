// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../utils/db";
import nextConnect from "next-connect";
import Lender from "../../models/lender";

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    await connectDB();

    const { email, id } = req.query;
    let lender;
    if (!email) {
      lender = await Lender.findById(id);
    }

    lender = await Lender.findOne({ email });

    if (!lender) {
      return res.status(404).json({ msg: "No such Lender Exists" });
    }

    return res.status(200).json({ lender });
  } catch (e) {
    console.log(e);
  }
});

handler.post(async (req, res) => {
  try {
    await connectDB();

    const data = req.body;

    let lender = new Lender(data);
    await lender.save();

    return res.status(201).json({
      msg: "Lender Created Successfully",
    });
  } catch (e) {
    console.log(e);
  }
});

export default handler;
