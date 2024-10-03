import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  SETTINGS: 'settings',
  SIDE: 'side',
  GAME: 'game',
  GAME5: 'game5',
  GAMEBOT: 'gamebot',
  GAMEBOT5: 'gamebot5',
  GAMEOVER: 'gameover'
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.SETTINGS, `/${DEFAULT_VIEW_PANELS.SETTINGS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.SIDE, `/${DEFAULT_VIEW_PANELS.SIDE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAME, `/${DEFAULT_VIEW_PANELS.GAME}`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAME5, `/${DEFAULT_VIEW_PANELS.GAME5}`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAMEBOT, `/${DEFAULT_VIEW_PANELS.GAMEBOT}`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAMEBOT5, `/${DEFAULT_VIEW_PANELS.GAMEBOT5}`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAMEOVER, `/${DEFAULT_VIEW_PANELS.GAMEOVER}`, [])
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
