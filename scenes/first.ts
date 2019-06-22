import { SceneBase } from '../shared/SceneBase';
import { BasicScene } from '../interfaces/BasicScene.interface';
/** First a three js scene */
export default class First extends SceneBase {
  constructor(config: BasicScene) {
    super(config);
  }

  initialize() {
    // Add the camera to the scene.
    this.scene.add(this.camera);

    // Start the renderer.
    this.renderer.setSize(this.width, this.height);

    // Attach the renderer-supplied
    // DOM element.
    this.container.appendChild(this.renderer.domElement);

    // add sphere
    this.scene.add(this.getSphere());

    this.renderer.render(this.scene, this.camera);
  }
}
