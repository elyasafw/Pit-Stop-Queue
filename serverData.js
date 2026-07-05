const url = "https://server-for-test-week-13.onrender.com/api/race";

export async function getData() {
    console.log("Loading queue data...");
    let response = await fetch(url);
    let data = await response.json();
    setTimeout(() => {
        return data;
    }, 1500);
}
