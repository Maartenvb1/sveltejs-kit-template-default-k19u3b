/** @type {import('./$types').PageLoad} */
export const load = ({ fetch, params }) => {
	const fetchFlowers = async () => {
		const res = await fetch('http://localhost:5173/genes.json');
		const data = await res.json();
		return data;
	};

	return {
		flower: fetchFlowers()
	};
};
