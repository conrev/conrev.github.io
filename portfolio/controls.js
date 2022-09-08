import { Group, Mesh, Raycaster, Vector2 } from 'three';
import {
  MapControls,
  OrbitControls,
} from 'three/examples/jsm/controls/OrbitControls';

const createController = (canvas, scene, camera) => {
  const raycaster = new Raycaster();
  const pointerVector = new Vector2();

  console.log(canvas, camera);
  const orbits = new OrbitControls(camera, canvas);
  orbits.maxDistance = 50;

  onmousedown = (event) => {
    pointerVector.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointerVector.y = (event.clientX / window.innerHeight) * 2 - 1;

    raycaster.setFromCamera(pointerVector, camera);
    const intersects = raycaster.intersectObjects(
      scene.children,
      true
    );

    // intersects.forEach((element) => {
    //   if (element instanceof Mesh) {
    //     console.log(element);
    //   }
    // });
  };
  const update = () => {
    orbits.update();
  };

  return {
    update,
  };
};

export default createController;
