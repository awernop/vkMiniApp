import { Panel, Button, Group} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import logo from "./../img/logo.svg";
import { registerUser, loginUser, updateUserData } from '../stores/user/user';
import bridge from '@vkontakte/vk-bridge';

import style from "../style/home.module.scss"

export const Home = ({id}) => {
  const routeNavigator = useRouteNavigator();

  const handleLogin = async() =>{
    const user = await bridge.send('VKWebAppGetUserInfo');
    const login = await loginUser(user.id);
    if(login) {
      updateUserData(login);
      routeNavigator.push('settings');
      return
    }
    const register = await registerUser(user.id);
    updateUserData(register);
    routeNavigator.push('settings');
  }

  return (
    <Panel id={id}>
      <Group>
        <div className={style.main}>
          <img src={logo} alt='' className={style.img}/>
          <div className={style.btns}>
            <Button stretched size="l" mode="primary" onClick={() => handleLogin()}>
              Начать игру
            </Button>
            <Button stretched size="l" mode="secondary" onClick={() => console.log("It works")}>
              Выбрать дизайн
            </Button>
            </div>
        </div>
      </Group>
    </Panel>
  );
};
