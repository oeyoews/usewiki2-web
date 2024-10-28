export async function getTwStatus() {
	const url = "http://localhost:8000/status"
	const res = await fetch(url)
	return res.json()
}