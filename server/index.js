import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDb from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

// Pull environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/V1/post", postRoutes);
app.use("/api/V1/dalle", dalleRoutes);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const startServer = async () => {
	try {
		connectDb(process.env.MONGODB_URL);
		app.listen(8080, () =>
			console.log("Server has started on port http://localhost:8080")
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();