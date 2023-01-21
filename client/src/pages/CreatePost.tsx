import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
	// navigate back to Home page when prompt is created
	const navigate = useNavigate();

	// STATES
	const [form, setForm] = useState({
		name: "",
		prompt: "",
		image: "",
	});
	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);

	// FUNCTIONS
	const generateImage = () => {};
	const handleSubmit = () => {};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: randomPrompt });
	};

	return (
		<section className="max-w-7wl mx-auto">
			<div>
				<h1 className="font-extrabold text-dark text-[2rem]">Create</h1>
				<p className="mt-2 text-dark text-lg">
					Create dreamful and stunning images generated through Dall-E AI and
					share it with the community.
				</p>
			</div>

			<form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5">
					<FormField
						labelName="Your name"
						type="text"
						name="name"
						placeholder="Jane Doe"
						value={form.name}
						handleChange={handleChange}
					/>
					<FormField
						labelName="Prompt"
						type="text"
						name="prompt"
						placeholder="an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background"
						value={form.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
					<div className="relative bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center mt-4">
						{form.image ? (
							<img
								src={form.image}
								alt={form.prompt}
								className="w-full h-full object-contain"
							/>
						) : (
							<img
								src={preview}
								alt="Preview"
								className="w-1/2 h-1/2 object-contain opacity-20"
							/>
						)}
						{generatingImg && (
							<div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.2)] rounded-lg">
								<Loader />
							</div>
						)}
					</div>
				</div>
				<div className="mt-5 flex gap-5">
					<button
						type="button"
						onClick={generateImage}
						className="text-white bg-tertiary font-medium rounded-md text-md w-full sm:w-auto px-5 py-2.5 text-center"
					>
						{generatingImg ? "Generating..." : "Generate"}
					</button>
				</div>
				<div className="mt-10">
					<p className="mt-2 text-gray-400 text-md">
						Once you have created the image you want, you can share it the
						others in the community.
					</p>
					<button
						type="submit"
						className="mt-3 text-white bg-secondary font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						{loading ? "Loading..." : "Share with Community"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default CreatePost;
