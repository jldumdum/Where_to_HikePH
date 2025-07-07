import {philippineSectors, hikingSpotsLuzon, hikingSpotsVisayas, hikingSpotsMindanao} from './pseudoDatabase.js';
import { randomDateGenerator } from './randomDateGenerator_helper.js';

const randomMessageGenerator = () => {
    const randomSector = philippineSectors[Math.floor(Math.random() * philippineSectors.length)];
    const randomHikingSpotsLuzon = hikingSpotsLuzon[Math.floor(Math.random() * hikingSpotsLuzon.length)];
    const randomHikingSpotsVisayas = hikingSpotsVisayas[Math.floor(Math.random() * hikingSpotsVisayas.length)];
    const randomHikingSpotsMindanao = hikingSpotsMindanao[Math.floor(Math.random() * hikingSpotsMindanao.length)];

    if (randomSector === 'Luzon') {
        return `Your next hike will be at ${randomHikingSpotsLuzon[0]} in ${randomSector} with a difficulty level of ${randomHikingSpotsLuzon[1]} on ${randomDateGenerator()}`;
    } else if (randomSector === 'Visayas') {
        return `Your next hike will be at ${randomHikingSpotsVisayas[0]} in ${randomSector} with a difficulty level of ${randomHikingSpotsVisayas[1]} on ${randomDateGenerator()}`;
    } else if (randomSector === 'Mindanao') {
        return `Your next hike will be at ${randomHikingSpotsMindanao[0]} in ${randomSector} with a difficulty level of ${randomHikingSpotsMindanao[1]} on ${randomDateGenerator()}`;
    }
}

console.log(randomMessageGenerator());