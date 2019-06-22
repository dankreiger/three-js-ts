import { BasicScene } from '../interfaces/BasicScene.interface';
import First from '../scenes/first';
import { initialSceneConfig } from '..';

export abstract class FormHelperDefault {
  constructor(protected initialConfig: BasicScene, protected btnClass: string) {
    this.btnClass = btnClass;
    this.initialConfig = initialConfig;
  }
  assignInputAttrs(config?: BasicScene): void {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('config-inputs');
    document.querySelector('form').appendChild(inputContainer);
    for (const [key, value] of Object.entries(config)) {
      const group = document.createElement('div');
      group.classList.add('group');
      const input = document.createElement('input');
      input.setAttribute('name', key);
      if (key === 'containerRef') {
        input.setAttribute('readonly', 'true');
        input.classList.add('inputValid');
      } else {
        input.setAttribute('type', 'number');
        input.setAttribute('required', 'true');
        if (value > 0) {
          input.classList.add('inputValid');
        }
      }
      input.value = value;

      const spanHighlight = document.createElement('span');
      spanHighlight.classList.add('highlight');

      const spanBar = document.createElement('span');
      spanBar.classList.add('bar');

      const label = document.createElement('label');
      label.textContent = key;
      group.appendChild(input);
      group.appendChild(spanHighlight);
      group.appendChild(spanBar);
      group.appendChild(label);

      inputContainer.appendChild(group);
    }
  }

  addButton(): void {
    const row = document.createElement('div');
    row.classList.add('button-row');
    const button = document.createElement('button');
    button.classList.add('set-scene');
    button.classList.add('btn');
    button.textContent = 'Set scene';
    row.appendChild(button);
    document.querySelector('#root').appendChild(row);
  }

  bindButton(): void {
    document.querySelector(this.btnClass).addEventListener('click', () => {
      const form = document.querySelector('form') as HTMLFormElement;
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      const inputs = form.querySelectorAll('input');

      let newConfig: BasicScene = initialSceneConfig;
      console.log(inputs.length);
      for (let i = 0; i < inputs.length; i++) {
        const _input = inputs[i];
        newConfig = { ...newConfig, [_input.name]: _input.value };
      }
      canvas.parentNode.removeChild(canvas);
      const first = new First(newConfig);
      first.initialize();
    });
  }
}
