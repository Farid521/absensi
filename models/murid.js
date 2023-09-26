import mongoose from "mongoose";

const Murid = new mongoose.Schema({
  nama: String,
  nomorAbsen: {
    type: Number,
    unique: true,
  },
  id: {
    type: String,
    unique: true,
  },
});

const dataMurid = mongoose.model("Kelas", Murid);
export default dataMurid;
