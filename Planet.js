export class Planet {
    constructor(planetRadius, planetWidth, planetHeight, textureLink){
        const planetGeometry = new THREE.SphereGeometry(planetRadius, planetWidth, planetHeight)
        let planetTexture = new THREE.TextureLoader().load(textureLink);
        const planetMaterial = new THREE.MeshBasicMaterial({map:planetTexture});
        const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
        return planetMesh
    }
}