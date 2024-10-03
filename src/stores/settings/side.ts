import { createStore, createEvent } from "effector";

interface zalupa {
    item: 'x' | 'o'
}

export const $side = createStore<zalupa>({
    item: 'x'
});

export const changeSide = createEvent<zalupa>();

$side.on(changeSide, (_,state) => state)