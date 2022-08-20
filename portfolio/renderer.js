import { WebGLRenderer } from "three";

const createRenderer = (canvas) => {

    const renderer = new WebGLRenderer({ canvas: canvas })
    renderer.setSize(window.innerWidth, window.innerHeight);

    return renderer;
}



export default createRenderer