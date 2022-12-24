import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './store/CounterSlice';
import Button from './Button'
import classes from './Counter.module.css';
import { AppDispatch, RootState } from './store';
import { useAppDispatch, useAppSelector } from './store/hooks';



const Counter = () => {
    const dispatch0 = useDispatch();
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter.counter)

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const increase = () => {
        dispatch(counterActions.increase(7))
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter)
    }


    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <Button onClick={incrementHandler}>Increment</Button>
                <Button onClick={increase}>Increase by 10</Button>
                <Button onClick={decrementHandler}>Decrement</Button>
            </div>
            <Button onClick={toggleCounterHandler}>toggleCounter</Button>
        </main>
    );
};

export default Counter;
