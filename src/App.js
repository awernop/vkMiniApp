import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Home } from './panels';
import { Settings } from './panels';
import { Side } from './panels';
import { Game } from './panels';
import { GameOver } from './panels';
import { Game5 } from './panels';
import { GameBot } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';
import { GameBot5 } from './panels';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" />
          <Settings id="settings"/>
          <Side id="side" />
          <Game id='game'/>
          <Game5 id='game5'/>
          <GameBot id='gamebot'/>
          <GameBot5 id='gamebot5'/>
          <GameOver id='gameover'/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
