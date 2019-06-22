import * as THREE from 'three';
import { BasicScene } from '../interfaces/BasicScene.interface';

export abstract class SceneBase {
  width: number;
  height: number;
  aspect: number;
  container: HTMLElement;
  cameraConfig: number[];
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;

  constructor(config: BasicScene) {
    this.width = config.width;
    this.height = config.height;
    this.aspect = this.width / this.height;
    this.container = document.querySelector(config.containerRef);
    this.cameraConfig = [
      config.viewAngle,
      this.aspect,
      config.near,
      config.far
    ];
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(...this.cameraConfig);
    this.scene = new THREE.Scene();
  }

  getSphere() {
    // Set up the sphere vars
    const RADIUS = 50;
    const SEGMENTS = 16;
    const RINGS = 16;
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xcc0000
    });
    // Create a new mesh with
    // sphere geometry - we will cover
    // the sphereMaterial next!
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS),

      sphereMaterial
    );

    // Move the Sphere back in Z so we
    // can see it.
    sphere.position.z = -300;

    return sphere;
  }
}
