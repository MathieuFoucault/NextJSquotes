"use client";

import { useCallback, useEffect, useState } from "react";
import { getRandomQuote } from "../lib/QuoteData";
import Image from "next/image";

const HomePage = () => {
	const [quote, setQuote] = useState<{ text: string; image: string } | null>(
		null,
	);

	const fetchQuote = useCallback(async () => {
		const newQuote = getRandomQuote();
		setQuote(newQuote);
	}, []);

	useEffect(() => {
		fetchQuote();
	}, [fetchQuote]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-black to-gray-700">
			<h1 className="text-2xl font-bold italic text-white">
				Citation du jour :
			</h1>
			{quote && (
				<div className="relative w-full max-w-md mt-4">
					<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-300 to-transparent" />
					<Image
						src={quote.image}
						alt={quote.text}
						width={500}
						height={300}
						className="relative rounded-lg"
					/>
				</div>
			)}
			<p className="quote mt-4">{quote?.text}</p>
			<button
				type="button"
				onClick={fetchQuote}
				className="mt-6 px-4 py-2 text-lg font-semibold text-black bg-white rounded hover:bg-gray-300 transition"
			>
				Citation suivante
			</button>
		</div>
	);
};

export default HomePage;
