import fs from "fs/promises";
import { get } from "http";
import { constrainedMemory } from "process";

const url = "https://server-for-test-week-13.onrender.com/api/race";

export async function getDataFromServer() {
    console.log("Loading queue data...");
    try {
        let response = await fetch(url);
        let data = await response.json();
        fs.writeFile("./data.json", JSON.stringify(data, null, 4), "utf8");
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

export async function getLocalData() {
    let data = await fs.readFile("./data.json", "utf8");
    return JSON.parse(data);
}

export const data = await getLocalData();