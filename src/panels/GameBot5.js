import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { Square5 } from '../components/Square/Square';
import { Results } from '../components/Choice/choice';
import imgUser from '../img/iconCross.svg';
import imgBot from '../img/iconZero.svg';
import { $counter1, plusCounter } from '../stores/counterPlayer1/counterPlayer1';
import { $counter2, plusCounter2 } from '../stores/counterPlayer2/counterPlayer2';
import { $side } from '../stores/settings/side';
import { $round } from '../stores/settings/round';
import { Panel, PanelHeader, PanelHeaderBack, Group, Button} from '@vkontakte/vkui';

import style from "../style/game5.module.scss";

export const GameBot5 = ({id}) =>{

  let p1 = useUnit($counter1);
    let p2 = useUnit($counter2);
    let side = useUnit($side);
    let round = useUnit($round);
    const [count, setCount] = useState(1)
    const [bot, setBot] = useState(false);
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
        setBot(false);
        setWinner(null);
    };

    const updateSquares = (ind) => {
        if (squares[ind] || winner) {
            return;
        }
        const s = squares;
        s[ind] = turn;
        setSquares(s);
        setTurn(turn === "x" ? 'o' : "x");
        setBot(bot == true ? false : true);
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

  const makeAIMove = () => {
    let bestMove = null;
    for (let i = 0; i < 25; i++) {
        let k = i
        if(i == 10){
            k = 'A'
        }
        else if(i == 11){
            k = 'B'
        }
        else if(i == 12){
            k = 'C'
        }
        else if(i == 13){
            k = 'D'
        }
        else if(i == 14){
            k = 'E'
        }
        else if(i == 15){
            k = 'F'
        }
        else if(i == 16){
            k = 'G'
        }
        else if(i == 17){
            k = 'H'
        }
        else if(i == 18){
            k = 'I'
        }
        else if(i == 19){
            k = 'J'
        }
        else if(i == 20){
            k = 'K'
        }
        else if(i == 21){
            k = 'L'
        }
        else if(i == 22){
            k = 'M'
        }
        else if(i == 23){
            k = 'N'
        }
        else if(i == 24){
            k = 'O'
        }
        else{
            k = i
        }
      if (!squares[k]) {
        bestMove = k;
        console.log(bestMove)
        break;
      }
    }

    if (bestMove !== null) {
        updateSquares(bestMove);
    }
  }

  useEffect(() => {
    if (bot) {
      setTimeout(makeAIMove, 500);
    }
  }, [bot]); 

  return (
    <div className={style.main}>
        <div className={style.point}>
            <Results points={p1} text="Игрок 1" img={imgUser} index={0} />
            <Results points={p2} text="Игрок 2" img={imgBot} index={1} />
        </div>
        <div>
            <h2>Ход {bot == true ? "бота" : "игрока"}</h2>
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