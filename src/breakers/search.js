import { createBreaker } from "./factory.js";
import { query } from "../services/fake_search_api.js";

export default createBreaker(query, "search");
