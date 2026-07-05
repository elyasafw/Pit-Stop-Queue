import { data } from "./serverData.js";

export function raceData() {
    let raceData = {
        raceName: data.raceName,
        currentLap: data.currentLap,
        totalLaps: data.totalLaps,
    };
    return raceData;
}