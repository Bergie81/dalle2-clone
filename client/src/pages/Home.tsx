import React, { useState, useEffect } from "react";

import { Loader, Card, FormField } from "../components";

interface Posts {
	title: string;
	data: [
		{
			_id: string;
		}
	];
}

const RenderCards = ({ data, title }: Posts) => {
	if (data?.length > 0) {
		return data.map((post) => <Card key={post._id} {...post} />);
	}

	return (
		<h2 className="mt-5 font-bold text-primary text-xl uppercase">{title}</h2>
	);
};

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState(null);

	const [searchText, setSearchText] = useState("");

	return (
		<div>
			<section className="max-w-7xl mx-auto">
				<div>
					<h1 className="font-extrabold text-dark text-[2rem]">
						The Community Showcase
					</h1>
					<p className="mt-2 text-dark text-lg">
						Browse through a collection of dreamful and stunning images
						generated by Dall-E AI.
					</p>
				</div>

				<div className="mt-16">
					<FormField />
				</div>

				<div className="mt-10">
					{loading ? (
						<div className="flex justify-center items-center">
							<Loader />
						</div>
					) : (
						<>
							{searchText && (
								<h2 className="font-medium text-dark text-xl mb-3">
									Showing results for{" "}
									<span className="text-dark">{searchText}</span>
								</h2>
							)}
							<div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
								{searchText ? (
									<RenderCards data={[]} title="No search results found" />
								) : (
									<RenderCards data={[]} title="No posts found" />
								)}
							</div>
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default Home;
