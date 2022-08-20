import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import createRenderer from './renderer';
import createScene from './scenes/portfolioScene'

const app = (canvas) => {

    const scene = createScene();
    const renderer = createRenderer(canvas);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.set(0, 20, 100);
    controls.update();

    const animate = () => {
        requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
    }

    animate();
}

export default app; 