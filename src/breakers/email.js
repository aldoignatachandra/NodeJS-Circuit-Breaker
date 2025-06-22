import { createBreaker } from "./factory.js";
import { send } from "../services/fake_email_api.js";

export default createBreaker(send, "email", { timeout: 2000 });
