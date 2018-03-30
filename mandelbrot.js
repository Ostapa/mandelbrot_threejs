function init() {
    let scene = new THREE.Scene();
    let stats = new Stats();
    document.body.appendChild(stats.domElement);

    // setup camera 
    let cameraGroup = new THREE.Group();
    let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
    camera.position.x = 0;
    camera.position.y = 5;
    camera.position.z = 20;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    cameraGroup.add(camera);
    cameraGroup.name = 'cameraGroup';
    scene.add(cameraGroup);

    // renderer
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor('rgb(255, 51, 51)');
    document.getElementById('webgl').appendChild(renderer.domElement);

    update(renderer, scene, camera, stats);

    return scene;
}

function update(renderer, scene, camera, stats) {
    stats.update();

    renderer.render(scene, camera);
    requestAnimationFrame(() => {
        update(renderer, scene, camera, stats);
    });
}

var scene = init(); // to access scene object in the browser's console