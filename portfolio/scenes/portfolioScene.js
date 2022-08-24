import * as THREE from 'three';
import loadAssets from '../assetsLoader';
import createRoom from '../components/room';
import createCamera from '../components/camera';
import {
  createSunlight,
  createAmbientLight,
} from '../components/lighting';
import createPlane from '../components/plane';

const createScene = async (canvas) => {
  const scene = new THREE.Scene();

  const assets = await loadAssets();
  const room = createRoom(assets);
  const sunlight = createSunlight();
  const ambientlight = createAmbientLight();
  const plane = createPlane();

  const camera = createCamera(canvas);

  scene.add(room.object);
  scene.add(sunlight.object);
  scene.add(ambientlight.object);
  scene.add(plane.object);

  const size = 100;
  const divisions = 100;

  const gridHelper = new THREE.GridHelper(size, divisions);
  scene.add(gridHelper);
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);
  const cameraHelper = new THREE.CameraHelper(camera.object);
  scene.add(cameraHelper);
  const lightHelper = new THREE.DirectionalLightHelper(
    sunlight.object,
    1
  );
  scene.add(lightHelper);

  const update = () => {
    camera.update();
  };

  return {
    activeScene: scene,
    activeCamera: camera.object,
    update,
  };
};

export default createScene;
