import { BasicScene } from '../interfaces/BasicScene.interface';
import { FormHelperDefault } from './FormHelper.default';

export default class FormHelper extends FormHelperDefault {
  constructor(initialConfig: BasicScene, btnClass: string) {
    super(initialConfig, btnClass);
    this.btnClass = btnClass;
    this.initialConfig = initialConfig;
  }

  init() {
    this.assignInputAttrs(this.initialConfig);
    this.addButton();
    this.bindButton();
  }
}
