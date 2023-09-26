import mongoose from "mongoose";
import dataMurid from "../models/murid.js";
import uniqid from "uniqid";

export const daftar = async (req, res, next) => {
  try {
    const { nama, absen } = req.body;
    const muridBaru = new dataMurid({
      nama,
      nomorAbsen: parseInt(absen),
      id: uniqid(),
    });
    const savedData = await muridBaru.save();
    console.log(savedData);
    res.status(200).json(savedData);
  } catch (err) {
    console.log(err);
    res.send("error cuy " + err);
  }
};
