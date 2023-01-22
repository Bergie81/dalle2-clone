import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET ALL POSTS
router.route("/").get(async (req, res) => {
	try {
		// Fetch all posts from the database
		const posts = await Post.find({});
		res.status(200).json({ success: true, data: posts });
	} catch (error) {
		res.status(500).json({ success: false, message: error });
	}
});

// CREATE A POST
router.route("/").post(async (req, res) => {
	try {
		const { name, prompt, image } = req.body;
		// Upload image to cloudinary
		const imageUrl = await cloudinary.uploader.upload(image);

		// Create a new entry in the database
		const newPost = await Post.create({
			name,
			prompt,
			image: imageUrl.url,
		});

		res.status(201).json({ success: true, data: newPost });
	} catch (error) {
		res.status(500).json({ success: false, message: error });
	}
});

export default router;
