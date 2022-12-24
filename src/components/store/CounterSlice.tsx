import { createSlice } from "@reduxjs/toolkit";

type CounterState= {
    counter: number;
    showCounter: boolean;
}

const initialCounterState: CounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counterName',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice