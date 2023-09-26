import express from "express";
import mongoose from "mongoose";
import { daftar } from "./middleware/daftar.js";
import { verifikasi } from "./middleware/verififkasi.js";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/test", (req,res) => {
  console.log(req.query.absen)
  res.send(req.query.absen)
})

app.post("/daftar", daftar);
app.get("/verifikasi", verifikasi);

mongoose
  .connect(
    "mongodb+srv://Farid521:yosinjin521@cluster0.tw3aobv.mongodb.net/absensi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`online at ${port}`);
    });
  });
