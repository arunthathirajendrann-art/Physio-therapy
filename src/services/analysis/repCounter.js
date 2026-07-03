let reps = 0;
let state = "DOWN";

const UP_THRESHOLD = 155;
const DOWN_THRESHOLD = 45;

export function updateShoulderRep(angle) {

    if (state === "DOWN") {
        if (angle >= UP_THRESHOLD) {
            state = "UP";
        }
    }

    else if (state === "UP") {
        if (angle <= DOWN_THRESHOLD) {
            state = "DOWN";
            reps++;
        }
    }

    return {
        reps,
        state
    };
}

export function resetCounter() {
    reps = 0;
    state = "DOWN";
}