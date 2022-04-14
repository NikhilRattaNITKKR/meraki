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
      lender = await Lender.findById(id).populate({
        model: "Borrower",
        path: "matches",
      });
    }

    lender = await Lender.findOne({ email }).populate({
      model: "Borrower",
      path: "matches",
    });

    if (!lender) {
      return res.status(404).json({ msg: "No such lender Exists" });
    }

    let matches = lender.matches;
    lender.matches = null;

    return res.status(200).json({ lender, matches });
  } catch (e) {
    console.log(e);
  }
});

handler.post(async (req, res) => {
  try {
    await connectDB();

    const { email, id, match } = req.body;

    let lender;
    if (!email) {
        lender = await Lender.findById(id);
    }

    lender = await Lender.findOne({ email });

    if (!lender) {
      return res.status(404).json({ msg: "No such lender Exists" });
    }

    lender.notification.push(match);
    await lender.save();

    return res.status(201).json({
      msg: "Match Created Successfully",
    });
  } catch (e) {
    console.log(e);
  }
});

export default handler;
