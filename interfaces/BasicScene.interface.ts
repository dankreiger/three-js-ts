export interface BasicScene {
  // scene size
  width: number;
  height: number;

  // camera attributes
  viewAngle: number;
  near: number;
  far: number;

  // DOM element to attach to
  containerRef: string;
}
