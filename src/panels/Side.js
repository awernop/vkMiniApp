import React from "react";
import { Panel, PanelHeader, PanelHeaderBack, Group, Button} from '@vkontakte/vkui';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { SideChoice } from "../components/Choice/choice";
import { changeSide } from "../stores/settings/side";
import {useState} from "react";
import { useUnit } from "effector-react";
import { $size } from "../stores/settings/size";
import { $opponent } from "../stores/settings/opponent";
import Cross from "../img/cross.svg";
import Zero from "../img/zero.svg"

import style from '../style/side.module.scss';

export const Side = ({id}) =>{
    const routeNavigator = useRouteNavigator();
    const [side, setSide] = useState('');
    const size = useUnit($size);
    const opponent = useUnit($opponent)
    
    const handleClick = () =>{
        changeSide({item: side}) 
        if(opponent.item === 'player'){
          if(size.item === 3){
            routeNavigator.push('/game')
          } 
          else{
            routeNavigator.push('/game5')
          }
        }
        else{
          if(size.item === 3){
            routeNavigator.push('/gamebot')
          } 
          else{
            routeNavigator.push('/gamebot5')
        }
        }
    }


    return(
    <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
          Выбор стороны
        </PanelHeader>
        <Group>
          <div className={style.main}>
            <div className={style.sideChoice}>
              <SideChoice content="Крестики" img={Cross} index={0} click={() => setSide('x')}/>
              <SideChoice content="Нолики" img={Zero} index={1} click={() => setSide('o')}/>
            </div>
            <Button stretched size="l" mode="primary" onClick={() => handleClick()}>
              Продолжить
            </Button>
          </div>
        </Group>
    </Panel>
    )
}