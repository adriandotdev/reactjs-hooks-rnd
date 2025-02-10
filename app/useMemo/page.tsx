"use client";

import React, { useState, useMemo, useEffect } from "react";

function slowFunction(num: number) {
	console.log("Calling Slow function");
	for (let i = 0; i < 1000000000; i++) {}
	return num * 2;
}

function useMemoPage() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);

	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? "black" : "white",
			color: dark ? "white" : "black",
		};
	}, [dark]);

	useEffect(() => {
		console.log("useEffect called with themeStyles: ", themeStyles);
	}, [themeStyles]);

	return (
		<div className="flex flex-col gap-2">
			<input
				className="border p-2"
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>

			<button
				className="border p-2 bg-slate-200"
				onClick={() => setDark((prevDark) => !prevDark)}
			>
				Change Theme
			</button>
			<div className="p-2" style={themeStyles}>
				{doubleNumber}
			</div>
		</div>
	);
}

export default useMemoPage;
