import express from "express";
import mongoose from "mongoose";
import { daftar } from "./middleware/daftar.js";
import { verifikasi } from "./middleware/verififkasi.js";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/daftar", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/test", (req, res) => {
  console.log(req.body)
  res.send('succes')
});

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