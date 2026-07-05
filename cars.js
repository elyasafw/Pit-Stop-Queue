import { futimes } from "node:fs";
import { data } from "./serverData.js";
import { exportString } from "node:ffi";

export function carsData() {
    let cars = data.cars;
    return cars;
}

export function searchCar(carNumber, cars) {
    let car = cars.find((car) => car.carNumber === carNumber);
    console.log(car);
    if (!car) {
        console.log(
            `Error: No car found with number #${carNumber} in the current race.`,
        );
    } else {
        console.log(
            `Found car #${carNumber}| Driver: ${car.driverName} | Status: ${car.status}`,
        );
    }
}

export function waitingsCars(cars) {
    let waitings = cars.filter((car) => car.status === "waiting");
    return waitings;
}
