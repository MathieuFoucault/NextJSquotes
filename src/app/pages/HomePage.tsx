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
		<div style={{ padding: "20px", textAlign: "center" }}>
			<h1>Citation du jour :</h1>
			{quote && (
				<>
					<p>{quote.text}</p>
					<Image src={quote.image} alt={quote.text} width={500} height={300} />
				</>
			)}
			<button type="button" onClick={fetchQuote}>
				Citation suivante
			</button>
		</div>
	);
};

export default HomePage;
