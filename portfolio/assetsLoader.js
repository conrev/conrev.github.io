import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import assetList from './assets';

const setupLoader = () => {
  const gltfLoader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/decoder/draco/');
  gltfLoader.setDRACOLoader(dracoLoader);

  return {
    gltfLoader,
    dracoLoader,
  };
};

const loadAssets = async () => {
  const assetSize = assetList.length;
  const loaders = setupLoader();
  const items = {};

  await Promise.all(
    assetList.map(async (asset) => {
      if (asset.type === 'gltf') {
        items[asset.name] = await loaders.gltfLoader.loadAsync(
          asset.filePath
        );
      }
    })
  );

  return items;
};
export default loadAssets;
