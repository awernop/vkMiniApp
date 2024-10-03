import React from "react";
import { Panel, PanelHeader, PanelHeaderBack, Group, Button} from '@vkontakte/vkui';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { $counter1,toZero1} from '../stores/counterPlayer1/counterPlayer1';
import { $counter2, toZero2} from '../stores/counterPlayer2/counterPlayer2';
import { $size } from "../stores/settings/size";
import { $opponent } from "../stores/settings/opponent";
import imgUser from '../img/iconCross.svg';
import imgBot from '../img/iconZero.svg';
import { useUnit } from "effector-react";
import { Results } from '../components/Choice/choice';

import style from "../style/gameover.module.scss";

export const GameOver = ({id}) =>{
    let p1 = useUnit($counter1);
    let p2 = useUnit($counter2);
    const opponent = useUnit($opponent)
    const size = useUnit($size)
    const routeNavigator = useRouteNavigator();

    const handleReplay = () =>{
        toZero2(0)
        toZero1(0)
        if(opponent.item === 'player'){
            if(size.item === 3){
              routeNavigator.push('/game')
            } 
            else if(size.item === 5) {
              routeNavigator.push('/game5')
            }
          }
          else{
            if(size.item === 3){
              routeNavigator.push('/gamebot')
            } 
            else if(size.item === 5){
                routeNavigator.push('/gamebot5')
          }
          }
    }

    const handleHome = () =>{
        toZero2(0)
        toZero1(0)
        routeNavigator.push('/')
    }

    return(
        <div className={style.main}>
            <div className={style.results}>
                <div className={style.result__p1}>
                    <Results points={p1} text="Игрок 1" img={imgUser} index={0} />
                    <div className={style.replay} onClick={() => handleReplay()}>
                        <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.9156 12.5483C34.6054 11.8333 35.7419 11.8152 36.4539 12.5079C37.166 13.2006 37.184 14.3417 36.4942 15.0567L31.2893 20.4517C30.9511 20.8021 30.4859 21 30 21C29.514 21 29.0488 20.8021 28.7106 20.4517L23.5058 15.0567C22.8159 14.3417 22.834 13.2005 23.5461 12.5079C24.2581 11.8152 25.3946 11.8333 26.0844 12.5483L28.351 14.8977C28.1943 13.1428 27.6644 11.4287 26.7818 9.87512C25.3565 7.36617 23.1009 5.43283 20.4034 4.40816C17.7059 3.38349 14.7355 3.33164 12.004 4.26155C9.27237 5.19145 6.95061 7.04489 5.43862 9.50257C3.92665 11.9603 3.31913 14.8683 3.72071 17.7257C4.1223 20.5832 5.50786 23.2111 7.63869 25.1568C9.76953 27.1026 12.5122 28.2442 15.3943 28.3852C18.1644 28.5207 20.8966 27.7235 23.1563 26.1266C23.9681 25.5529 25.0914 25.7459 25.6651 26.5578C26.2388 27.3696 26.0458 28.4929 25.2339 29.0666C22.3182 31.1271 18.7928 32.1557 15.2185 31.9809C11.4996 31.799 7.96067 30.3259 5.2112 27.8153C2.46173 25.3047 0.673919 21.9138 0.155742 18.2268C-0.362435 14.5397 0.421463 10.7874 2.37241 7.61622C4.32335 4.44502 7.31917 2.05349 10.8438 0.853611C14.3684 -0.346268 18.2012 -0.279367 21.6818 1.04279C25.1624 2.36494 28.0729 4.85957 29.912 8.09693C31.0542 10.1075 31.7386 12.3263 31.9385 14.5976L33.9156 12.5483Z" fill="#2688EB" />
                        </svg>
                    </div>
                </div>
                <div className={style.result__p2}>
                    <Results points={p2} text="Игрок 2" img={imgBot} index={1} />
                    <div className={style.home} onClick={() => handleHome()}>
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1666 26.8334H26.8333V38.3334H34.4999C35.5585 38.3334 36.4166 37.4753 36.4166 36.4167V23.0001H39.6692C40.1985 23.0001 40.6276 22.571 40.6276 22.0417C40.6276 21.7701 40.5123 21.5112 40.3103 21.3294L23.641 6.32706C23.2766 5.99905 22.7233 5.99905 22.3589 6.32706L5.68956 21.3294C5.29616 21.6835 5.26427 22.2894 5.61833 22.6828C5.80007 22.8848 6.05898 23.0001 6.33066 23.0001H9.58328V36.4167C9.58328 37.4753 10.4414 38.3334 11.4999 38.3334H19.1666V26.8334Z" fill="#2688EB" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}