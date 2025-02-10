/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";

function useStatePage() {
	const countFunction = () => {
		console.log("count function called");
		return 0;
	};

	// Basic declaration of the useState hook
	const [count, setCount] = useState(0);

	const improperIncreaseByTwo = () => {
		setCount(count + 1);
		setCount(count + 1);
	};

	const properIncreaseByTwo = () => {
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
	};

	/**
     * Declaration of the useState hook
	    This declaration ay mag iinitialize ng count variable sa 0 but the useState  will always re run every time the component re-renders since we directly set the initial value.
	    NOTE: You can verify this by checking the browser console.
     */
	// const [count, setCount] = useState(countFunction());

	// Another declaration of the useState hook
	// This declaration ay mag iinitialize ng count variable sa 0 at the start of the component's lifecycle and will only run once. Since we pass a function, mag rurun lang siya once when the component mounts.
	// This is helpful if you have some expensive computation to do only once.
	// const [count, setCount] = useState(() => countFunction());

	return (
		<main className="hooks-page-main">
			<h1 className="hooks-page-title">useState Example</h1>

			<div className="pt-5">
				<p>You clicked {count} times</p>
				<button
					className="bg-slate-950 text-white p-2"
					onClick={() => {
						setCount((prevCount) => prevCount + 1);
						setCount((prevCount) => prevCount + 1);
					}}
				>
					Click me
				</button>
			</div>
		</main>
	);
}

export default useStatePage;
