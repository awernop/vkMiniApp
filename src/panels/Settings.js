import { Panel, PanelHeader, PanelHeaderBack, Group, Button} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import React, { useState } from 'react';
import CountRounds from '../components/Choice/choice';
import SizeField from '../components/Choice/choice';
import { PlayWithChoice } from '../components/Choice/choice';
import { changeSize } from '../stores/settings/size';
import { changeRounds } from '../stores/settings/round';
import { changeOpponent } from '../stores/settings/opponent';
import HumanLogo from '../img/human.svg';
import RobotLogo from '../img/robot.svg';

import style from "./../style/settings.module.scss"



export const Settings = ({id}) =>{
    const routeNavigator = useRouteNavigator();
    const [round, setRound] = useState('');
    const [size, setSize] = useState('');
    const [opponent, setOpponent] = useState('')

const handleClick = () =>{
    changeRounds({item: round})
    changeSize({item: size})
    changeOpponent({item: opponent})
    routeNavigator.push('/side')
}

    return (
      <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
          Настройки игры
        </PanelHeader>
        <Group>
            <div className={style.main}>
                <h2>Выбор соперника</h2>
                <form>
                <div className={style.playerChoice}>
                    <PlayWithChoice content="Играть с человеком" img={HumanLogo} click = {() => setOpponent('player')}/>
                    <PlayWithChoice content="Играть с ботом" img={RobotLogo} click = {() => setOpponent('bot')}/>
                </div>
                </form>
                <h2>Размер поля</h2>
                <form>
                <div className={style.sizeChoice}>
                    <SizeField content="3x3" index={0} click = {() => setSize(3)}/>
                    <SizeField content="5x5" index={1} click = {() => setSize(5)}/>
                </div>
                </form>
                <h2>Количество раундов</h2>
                <form>
                <div className={style.roundsChoice}>
                    <CountRounds content={5} index={0} click = {() => setRound(5)}/>
                    <CountRounds content={10} index={1} click = {() => setRound(10)}/>
                    <CountRounds content={30} index={2} click = {() => setRound(30)}/>
                </div>
                </form>
                <Button stretched size="l" mode="primary" onClick={() => 
                  handleClick()}>Продолжить</Button>
            </div>
        </Group>
      </Panel>
    );
}