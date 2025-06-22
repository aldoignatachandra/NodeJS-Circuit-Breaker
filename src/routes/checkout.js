import express from "express";
import payments from "../breakers/payment.js";
import email from "../breakers/email.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { amount, card, email: userEmail } = req.body;

  const payment = await payments.fire(amount, card);
  if (payment.fallback) {
    // breaker open
    return res.status(503).json({ error: "payment unavailable" });
  }

  const receipt = await email.fire(userEmail, "Your receipt");

  res.json({ payment, receipt });
});

export default router;
