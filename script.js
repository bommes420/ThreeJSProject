import { Planet } from './Planet.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const moon = new Planet(32, 20, 25, './textures/moon.png')

scene.add(moon);

camera.position.z = 100;

function animate() {
    requestAnimationFrame(animate);
    // sun.rotation.x += 0.01;
    // sun.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();