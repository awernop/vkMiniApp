import { createStore, createEvent } from "effector";

interface rounds {
    item: 5 | 10 | 30
}

export const $round = createStore<rounds>({
    item: 5
});

export const changeRounds = createEvent<rounds>();

$round.on(changeRounds, (_,state) => state)