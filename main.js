import * as THREE from 'three';
import './style.css';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';

import generateWorld from './generateWorld';

// Debug
const gui = new dat.GUI()

//Loading
const textureLoader = new THREE.TextureLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x80a0e0);
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const grassBlock = new THREE.Mesh( geometry, material );
scene.add( grassBlock );

const light1 = new THREE.DirectionalLight();
light1.position.set(1, 1, 1);
scene.add(light1);

const ambientLight = new THREE.AmbientLight();
ambientLight.intensity = 0.1;
scene.add(ambientLight);

camera.position.z = 5;

generateWorld(scene, 20);

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

animate();