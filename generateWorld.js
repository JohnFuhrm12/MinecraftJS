import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );

function generateWorld(scene, worldSize) {
    for (let x = 0; x < worldSize; x++) {
        for (let z = 0; z < worldSize; z++) {
            const grassBlock = new THREE.Mesh( geometry, material );
            grassBlock.position.set(x, 0, z);
            scene.add( grassBlock );
        }
    }
}

export default generateWorld;