import { createStore, createEvent } from "effector";

export const $counter1 = createStore<number>(0);

export const plusCounter = createEvent();
export const toZero1 = createEvent();

$counter1.on(plusCounter, (state) => state + 1);
$counter1.on(toZero1, (_,state) => state)

