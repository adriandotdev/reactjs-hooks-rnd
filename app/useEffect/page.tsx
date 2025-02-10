"use client";

import React, { useEffect, useState } from "react";

function useEffectExample() {
	const [value, setValue] = useState("posts");

	useEffect(() => {
		console.log("useEffect called with value: ", value);

		return () => {
			console.log("cleanup function called");
		};
	}, [value]);

	return (
		<main className="hooks-page-main">
			<h1 className="hooks-page-title">useEffect Example</h1>

			<div className="flex gap-5 flex-wrap mt-3">
				<button
					className="bg-slate-300 py-3 px-5 rounded-md shadow-md"
					onClick={() => setValue("posts")}
				>
					posts
				</button>
				<button
					className="bg-slate-300 py-3 px-5 rounded-md shadow-md"
					onClick={() => setValue("users")}
				>
					users
				</button>
			</div>
			<h1 className="text-3xl mt-5">{value}</h1>
		</main>
	);
}

export default useEffectExample;
