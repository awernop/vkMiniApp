import { createStore, createEvent } from "effector";

interface opponent{
    item: 'player' | 'bot'
}

export const $opponent = createStore<opponent>({
    item: 'player'
})

export const changeOpponent = createEvent<opponent>();

$opponent.on(changeOpponent, (_,state) => state)