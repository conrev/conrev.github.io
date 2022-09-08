import * as THREE from 'three';
import createRenderer from './renderer';
import createScene from './scenes/portfolioScene';
import createController from './controls';

const app = async (canvas) => {
  const sceneSetup = await createScene(canvas);
  const renderer = createRenderer(canvas);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.update(sceneSetup);
    sceneSetup.update();
  };

  animate();
};

export default app;
