import express from "express";
import mongoose from "mongoose";
import { daftar } from "./middleware/daftar.js";
import { verifikasi } from "./middleware/verififkasi.js";
import path from "path";
import { fileURLToPath } from 'url';
import cors from 'cors';

// Constants
const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGO_URI || "mongodb+srv://Farid521:yosinjin521@cluster0.tw3aobv.mongodb.net/absensi?retryWrites=true&w=majority";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const urlDir = {
  home: "/",
  daftar: "/daftar",
  test: "/test",
  verifikasi: "/verifikasi"
};

app.get(urlDir.home, (req, res) => {
  res.send("Hello World!");
});

app.get(urlDir.daftar, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Test route for any data
app.post(urlDir.test, (req, res) => {
  console.log(req.body);
  res.json({
    status: 'berhasil',
    id: '1213445363'
  });
});

// Routes for daftar and verifikasi
app.post(urlDir.daftar, daftar);
app.get(urlDir.verifikasi, verifikasi);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    app.listen(port, () => {
      console.log(`Server online at ${port}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the process with failure code
  }
};

connectDB();
