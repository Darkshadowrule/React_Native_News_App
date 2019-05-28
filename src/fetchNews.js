export async function getUSANews(url) {
	let result = await fetch(url).then(response => response.json());
	return result.articles;
}