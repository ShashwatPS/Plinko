import { pad } from "./padding";
import { ballRadius, sinkWidth, NUM_SINKS, WIDTH, HEIGHT, horizontalFriction, verticalFriction, gravity } from "./constants";

export interface Obstacle {
    x: number;
    y: number;
    radius: number;
}

export interface Sink {
    x: number;
    y: number;
    width: number;
    height: number;
    multiplier?: number;
}

const MULTIPLIERS: {[ key: number ]: number} = {
    1: 16,
    2: 9,
    3: 2,
    4: 1.4,
    5: 1.4,
    6: 1.2,
    7: 1.1,
    8: 1,
    9: 0.5,
    10: 1,
    11: 1.1,
    12: 1.2,
    13: 1.4,
    14: 1.4,
    15: 2,
    16: 9,
    17: 16
}


export const createObstacles = ( ): Obstacle[] => {
    const obstacles: Obstacle[] = [];
    for (let i = 0; i < 10; i++) {
        obstacles.push({
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            radius: ballRadius
        });
    }
    return obstacles;
}