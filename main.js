import { getDataFromServer, getLocalData } from "./serverData.js";
import { raceData } from "./race.js";
import { carsData, searchCar, waitingsCars } from "./cars.js";

await getDataFromServer();
const data = await getLocalData();

function liveReport() {
    console.log("Pit Stop Queue - Race Team Management System");
    console.log(
        "Race engineer: Let's check the current queue status on the pit wall.\n",
    );
    console.log("Loading queue data...\n");

    setTimeout(() => {
        let race = raceData(data);
        let cars = carsData(data);
        let waitings = waitingsCars(cars);
        let nextCar = waitings[0];
        console.log("========== PIT STOP QUEUE ==========");
        console.log(
            `Lap: ${race.currentLap} / ${race.totalLaps}
Total cars in race: ${cars.length}
Pit stops completed: 1`,
        );
        console.log(`\nCars waiting for pit stop:`);
        for (let car of waitings) {
            console.log(`- Car #${car.carNumber} | Driver: ${car.driverName}`);
        }
        console.log("\nNext car to enter the pit:");
        console.log(
            `>> Car #${nextCar.carNumber} | Driver: ${nextCar.driverName}`,
        );
        console.log("=====================================\n");
        console.log(
            `Radio message to car #${nextCar.carNumber}: "Box box box, Daniel Levi, pit this lap!"`,
        );
        console.log("\n--- Search for a car by number ---");
        searchCar(7, cars);
        searchCar(99, cars);
        console.log(
            "\nProcess completed successfully. The pit wall is up to date.",
        );
    }, 1500);
}
liveReport();
