import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );

class World extends THREE.Group {
    constructor( size = {width: 16, height: 48} ) {
        super();
        this.size = size;
    }

    generate() {
        this.clear();

        const maxCount = this.size.width * this.size.height * this.size.width;
        const grassBlock = new THREE.InstancedMesh( geometry, material, maxCount );
        grassBlock.count = 0;
    
        const matrix = new THREE.Matrix4();
    
        for (let x = 0; x < this.size.width; x++) {
            for (let y = 0; y < this.size.height; y++) {
                for (let z = 0; z < this.size.width; z++) {
                    matrix.setPosition(x, y, z);
                    grassBlock.setMatrixAt(grassBlock.count++, matrix);
                }
            }
        }
    
        this.add(grassBlock);
    }
}

export default World;