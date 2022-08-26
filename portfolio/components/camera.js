import { PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const createCamera = (canvas) => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  const controls = new OrbitControls(camera, canvas);
  controls.maxDistance = 50;
  camera.position.set(10, 7, 17);

  const update = () => {
    controls.update();
  };

  onresize = (event) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    controls.update();
  };

  return {
    object: camera,
    update,
  };
};

export default createCamera;
