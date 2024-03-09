import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );

function generateWorld(scene, worldSize) {
    const maxCount = worldSize.width * worldSize.height * worldSize.width;
    const grassBlock = new THREE.InstancedMesh( geometry, material, maxCount );
    grassBlock.count = 0;

    const matrix = new THREE.Matrix4();

    for (let x = 0; x < worldSize.width; x++) {
        for (let y = 0; y < worldSize.height; y++) {
            for (let z = 0; z < worldSize.width; z++) {
                matrix.setPosition(x, y, z);
                grassBlock.setMatrixAt(grassBlock.count++, matrix);
            }
        }
    }

    scene.add(grassBlock);
}

export default generateWorld;