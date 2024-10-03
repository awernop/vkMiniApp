import { Panel, PanelHeader, PanelHeaderBack, Group, Button} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import React, { useState } from 'react';
import { Square5 } from '../components/Square/Square';
import { Results } from '../components/Choice/choice';
import imgUser from '../img/iconCross.svg';
import imgBot from '../img/iconZero.svg';
import { useUnit } from 'effector-react';
import { $counter1, plusCounter } from '../stores/counterPlayer1/counterPlayer1';
import { $counter2, plusCounter2 } from '../stores/counterPlayer2/counterPlayer2';
import { $side } from '../stores/settings/side';
import { $round } from '../stores/settings/round';

import style from "../style/game5.module.scss";

export const Game5 = ({id}) =>{
    let p1 = useUnit($counter1);
    let p2 = useUnit($counter2);
    let side = useUnit($side);
    let round = useUnit($round);
    const [count, setCount] = useState(1)
    const [squares, setSquares] = useState(Array(25).fill(""));
    const [turn, setTurn] = useState(side.item == 'x' ? "x" : "o");
    const [winner, setWinner] = useState(null);
    const routeNavigator = useRouteNavigator();

    const checkEndTheGame = () => {
        for (let square of squares) {
            if (!square) return false;
        }
        return true;
    };

    const checkWinner = () => {
        const combos = [
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            ['A', 'B', 'C', 'D', 'E'],
            ['F', 'G', 'H', 'I', 'J'],
            ['K', 'L', 'M', 'N', 'O'],
            [0, 5, 'A', 'F', 'K'],
            [1, 6, 'B', 'G', 'L'],
            [2, 7, 'C', 'H', 'M'],
            [3, 8, 'D', 'I', 'N'],
            [4, 9, 'E', 'J', 'O'],
            [0, 6, 'C', 'I', 'O'],
            [4, 8, 'C', 'G', 'K'],
        ];

        for (let combo of combos) {
            const [a, b, c, d, e] = combo;
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c] &&
                squares[a] === squares[d] &&
                squares[a] === squares[e]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    const resetGame = () => {
        setSquares(Array(25).fill(""));
        setTurn(side.item == 'x' ? "x" : "o");
        setWinner(null);
    };

    const updateSquares = (ind) => {
        if (squares[ind] || winner) {
            return;
        }
        const s = squares;
        s[ind] = turn;
        setSquares(s);
        setTurn(turn === "x" ? "o" : "x");
        const W = checkWinner();
        if (W) {
            setWinner(W);
            W == 'x' ? plusCounter(): plusCounter2();
            if(count === round.item){
                routeNavigator.push('/gameover')
            }
            else{
                setCount(count + 1)
                resetGame();
            }
        } else if (checkEndTheGame()) {
            setWinner("x | o");
            plusCounter2();
            plusCounter();
            if(count === round.item){
                routeNavigator.push('/gameover')
            }
            else{
                setCount(count + 1)
                resetGame();
            }
        }
    };

    return (
        <div className={style.main}>
            <div className={style.point}>
                <Results points={p1} text="Игрок 1" img={imgUser} index={0} />
                <Results points={p2} text="Игрок 2" img={imgBot} index={1} />
            </div>
            <div>
                <h2>Ход игрока {turn === 'x' ? 1 : 2}</h2>
            </div>
            <div className={style.game}>
                {Array.from("0123456789ABCDEFGHIJKLMNO").map((ind) => (
                    <Square5
                        key={ind}
                        ind={ind}
                        updateSquares={updateSquares}
                        clsName={squares[ind]}
                    />
                ))}
            </div>
            <Button stretched size="l" mode="primary" onClick={() => 
                  routeNavigator.push('/gameover')}>Завершить игру</Button>
        </div>
    );
}