import { Color, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

const createPlane = () => {
  const planeGeometry = new PlaneGeometry(100, 100);
  const planeMaterial = new MeshBasicMaterial({
    color: new Color(0.8, 0.8, 0.8),
  });
  const planeMesh = new Mesh(planeGeometry, planeMaterial);
  planeMesh.rotation.x = -Math.PI / 2;
  planeMesh.position.y = -0.2;
  planeMesh.receiveShadow = true;

  return {
    object: planeMesh,
  };
};

export default createPlane;
