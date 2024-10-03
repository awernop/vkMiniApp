import { createStore, createEvent } from "effector";

interface sizes{
    item: 3 | 5
}

export const $size = createStore<sizes>({
    item: 3
});

export const changeSize = createEvent<sizes>();

$size.on(changeSize, (_,state) => state)