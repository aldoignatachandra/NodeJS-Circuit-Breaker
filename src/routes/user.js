import express from "express";
import searchBreaker from "../breakers/search.js";

const router = express.Router();

router.get("/search", async (req, res) => {
  const { q } = req.query;
  const result = await searchBreaker.fire(q);
  res.json(result);
});

export default router;
