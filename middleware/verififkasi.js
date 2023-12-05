import dataMurid from "../models/murid.js";
import { inputData } from "../google/insert.js";
import { getCurrentTimeInWIB } from "../util/time.js";

export const verifikasi = async (req, res, next) => {
  const querryData = req.query.absen;
  console.log(querryData)

  try {
    const murid = await dataMurid.findOne({ id: querryData });
    if (!murid) {
      res.status(404).json({
        status: "data not found",
      });
    }
    console.log(murid);
    await inputData(murid.nomorAbsen, murid.nama, getCurrentTimeInWIB());
    res.status(200).send('succes')
  } catch (err) {
    console.log(err); 
    res.send(err);
  }
};
