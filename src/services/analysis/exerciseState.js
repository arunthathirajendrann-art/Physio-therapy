let state = "READY";

export function updateExerciseState(angle) {

    switch(state){

        case "READY":
            if(angle > 150){
                state = "RAISING";
            }
            break;

        case "RAISING":
            if(angle > 165){
                state = "HOLD";
            }
            break;

        case "HOLD":
            if(angle < 150){
                state = "LOWERING";
            }
            break;

        case "LOWERING":
            if(angle < 45){
                state = "READY";
            }
            break;
    }

    return state;
}