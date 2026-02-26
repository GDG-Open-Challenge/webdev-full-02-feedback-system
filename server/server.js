const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.post("/api/feedback", async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    const feedback = new Feedback({
      name,
      email,
      message,
      rating,
    });

    await feedback.save();
    res.status(201).json({
      success: true,
      data: {
        id: feedback._id,
        name: feedback.name,
        email: feedback.email,
        message: feedback.message,
        rating: feedback.rating,
        timestamp: feedback.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      feedbacks: feedbacks.map((f) => ({
        _id: f._id,
        userName: f.name,
        userEmail: f.email,
        userFeedback: f.message,
        userRating: f.rating,
        createdAt: f.createdAt,
      })),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/feedback/:id", async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { name, email, message, rating },
      { new: true },
    );

    res.json({
      success: true,
      data: {
        id: feedback._id,
        name: feedback.name,
        email: feedback.email,
        message: feedback.message,
        rating: feedback.rating,
        timestamp: feedback.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/feedback/:id", async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
