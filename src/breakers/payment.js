import { createBreaker } from "./factory.js";
import { charge } from "../services/fake_payment_api.js";

const breaker = createBreaker(
  (amount, card) => charge(amount, card),
  "payments",
  { timeout: 2500 } // stricter than default
);

export default breaker;
