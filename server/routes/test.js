import express from "express";
import testFunc from "../controllers/test.js";

const router = express.Router();

router.get("/", testFunc);

export default router;
