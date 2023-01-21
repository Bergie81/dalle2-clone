import express from "express";
import * as dotenv from "dotenv";
import { Configration, OpenAiApi } from "openai";

dotenv.config();

const router = express.Router();
