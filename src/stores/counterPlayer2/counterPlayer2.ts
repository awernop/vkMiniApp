import { createStore, createEvent } from "effector";

export const $counter2 = createStore<number>(0);

export const plusCounter2 = createEvent();
export const toZero2 = createEvent();

$counter2.on(plusCounter2, (state) => state + 1);
$counter2.on(toZero2, (_,state) => state)