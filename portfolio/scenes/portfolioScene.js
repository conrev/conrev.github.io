import * as THREE from 'three'

const createScene = () => {

    const scene = new THREE.Scene();

    // create grid helper
    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

    return scene;
}

export default createScene