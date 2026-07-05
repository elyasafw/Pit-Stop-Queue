export function raceData(data) {
    let raceData = {
        raceName: data.raceName,
        currentLap: data.currentLap,
        totalLaps: data.totalLaps,
    };
    return raceData;
}
