import { Group, Mesh, Raycaster, Vector2 } from 'three';

const createController = () => {
  const raycaster = new Raycaster();
  const pointerVector = new Vector2();
  let sceneSetup;

  onmousedown = (event) => {
    pointerVector.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointerVector.y = (event.clientX / window.innerHeight) * 2 - 1;

    raycaster.setFromCamera(pointerVector, sceneSetup.activeCamera);
    const intersects = raycaster.intersectObjects(
      sceneSetup.activeScene.children,
      true
    );
    const INTERSECTED = intersects[0].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex(0xff0000);

    // intersects.forEach((element) => {
    //   if (element instanceof Mesh) {
    //     console.log(element);
    //   }
    // });
  };
  const update = (setup) => {
    sceneSetup = setup;
  };

  return {
    update,
  };
};

export default createController;
