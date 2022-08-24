import { AmbientLight, DirectionalLight } from 'three';

const createSunlight = () => {
  const sunlight = new DirectionalLight('#ffffff', 3);
  sunlight.castShadow = true;
  sunlight.shadow.camera.far = 10;
  sunlight.shadow.mapSize.set(2048, 2048);
  sunlight.shadow.normalBias = 0.05;
  sunlight.position.set(1.5, 7, 3);

  return {
    object: sunlight,
  };
};

const createAmbientLight = () => {
  const ambient = new AmbientLight('#ffffff', 1);
  return {
    object: ambient,
  };
};
export { createAmbientLight, createSunlight };
