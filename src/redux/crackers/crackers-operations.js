import {
    addCrackerSuccess,
    deleteCrackerSuccess,
} from './crackers-actions';



export const crackersAdd = newCracker => dispatch => {
    const cracker = {
        id: newCracker.id,
        range1: newCracker.range1,
        range2: newCracker.range2,
        range3: newCracker.range3,
        range4: newCracker.range4,
    }

  dispatch(addCrackerSuccess(cracker))  
};

export const crackerDelete = id => dispatch => {

   dispatch(deleteCrackerSuccess(id))
}

