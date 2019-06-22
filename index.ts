import First from './scenes/first';
import { BasicScene } from './interfaces/BasicScene.interface';
import FormHelper from './utils/formHelper';
import './styles/index.scss';

export const initialSceneConfig: BasicScene = {
  width: 400,
  height: 300,
  viewAngle: 45,
  near: 0.1,
  far: 1000,
  containerRef: '#container'
};

const formHelper = new FormHelper(initialSceneConfig, '.set-scene');
formHelper.init();

const first = new First(initialSceneConfig);

first.initialize();
