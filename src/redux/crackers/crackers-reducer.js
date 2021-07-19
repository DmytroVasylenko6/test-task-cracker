import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addCrackerSuccess,
    deleteCrackerSuccess,
    // getCrackerSuccess,
} from './crackers-actions'


const crackerReducer = createReducer([], {
    // [getCrackerSuccess]: (state, {payload}) => [...state, ...payload],
    [addCrackerSuccess]: (state, {payload}) => [...state, payload],
    [deleteCrackerSuccess]: (state, {payload}) => state.filter(cracker => cracker.id !== payload),
})


const crackersReducer = combineReducers({
    crackersBasket: crackerReducer,
});

export default crackersReducer;