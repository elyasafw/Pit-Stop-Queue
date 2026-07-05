import { futimes } from "node:fs";
import { data } from "./serverData.js";

export function carsData() {
    let cars = data.cars;
    return cars;
}
