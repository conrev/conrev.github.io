import { Group } from 'three';

const createRoom = (assets) => {
  const room = assets.room.scene;

  room.scale.set(0.11, 0.11, 0.11);
  room.traverse((element) => {
    element.castShadow = true;
    element.receiveShadow = true;

    console.log(element);

    if (element instanceof Group) {
      element.children.forEach((grandElement) => {
        grandElement.castShadow = true;
        grandElement.receiveShadow = true;
      });
    }
  });

  return {
    object: room,
  };
};

export default createRoom;
