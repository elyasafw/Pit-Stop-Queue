import fs from "fs/promises";
import { get } from "http";
import { constrainedMemory } from "process";

const url = "https://server-for-test-week-13.onrender.com/api/race";

export async function getData() {
    console.log("Loading queue data...");
    try {
        let response = await fetch(url);
        let data = await response.json();
        setTimeout(() => {
            fs.writeFile("./data.json", JSON.stringify(data, null, 4), "utf8");
        }, 1500);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

getData();
