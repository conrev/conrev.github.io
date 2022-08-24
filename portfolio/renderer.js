import {
  ACESFilmicToneMapping,
  PCFShadowMap,
  WebGLRenderer,
} from 'three';

const createRenderer = (canvas) => {
  const renderer = new WebGLRenderer({ canvas });
  renderer.physicallyCorrectLights = true;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.75;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);

  const update = (sceneSetup) => {
    renderer.render(sceneSetup.activeScene, sceneSetup.activeCamera);
  };

  onresize = (event) => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  return {
    update,
  };
};

export default createRenderer;
