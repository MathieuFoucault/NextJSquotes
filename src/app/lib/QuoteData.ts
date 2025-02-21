const quotes = [
	{
		text: "Qu'on s'entende bien.",
		image: "/images/1.PNG",
	},
	{
		text: "Il n'y a rien de magique.",
		image: "/images/2.PNG",
	},
	{
		text: "Read the fucking doc.",
		image: "/images/3.PNG",
	},
	{
		text: "Les entretiens se feront aujourd'hui.",
		image: "/images/4.PNG",
	},
	{
		text: "Je t'en prie, Amandine.",
		image: "/images/5.PNG",
	},
	{
		text: "Signatures svp.",
		image: "/images/6.PNG",
	},
	{
		text: "Damien : comme l'a dit un grand sage...",
		image: "/images/7.PNG",
	},
	{
		text: "Dernière pr : 17h30.",
		image: "/images/8.PNG",
	},
	{
		text: "Je ne vais pas vous lâcher.",
		image: "/images/9.PNG",
	},
];

export const getRandomQuote = () => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
};
