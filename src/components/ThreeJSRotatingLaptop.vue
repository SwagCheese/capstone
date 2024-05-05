<template>
    <div class="divCenter pt-20">
        <div
                id="threejs-container"
        />
    </div>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/* eslint-enable */
export default {
    props: {
        paddingValue: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            hasUnintendedBehaviors: false
        };
    },
    mounted() {
        let isInDesktop = window.innerWidth > 1148;
        const userPlatform = (platform) => {
            return platform ? 5 : 3;
        };

        const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
        camera.position.x = 30;
        camera.position.y = 20;
        camera.position.z = 30;

        //loader
        const loader = new GLTFLoader();
        loader.load(
            ' ./laptop.glb',
            function (gltf) {
                const model = gltf.scene;

                // position the model from the camera
                model.position.set(0, -5, 6);
                model.scale.set(
                    userPlatform(isInDesktop),
                    userPlatform(isInDesktop),
                    userPlatform(isInDesktop)
                ); //model size
                model.castShadow = true;
                scene.add(model);
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );

        // add to HTML viewer
        // const container = document.body;
        const container = document.getElementById('threejs-container');
        //container.appendChild( renderer.domElement ); // may need to change to append this on the right element

        // three js renderer and size on the element
        const renderer = new THREE.WebGLRenderer(
            { antialias: true },
            { alpha: true }
        );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.setSize(450, 450/2); // size
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);
        renderer.setClearColor(0x000000, 0); // set transparent bg

        // attempt to add shadows
        const pmremGenerator = new THREE.PMREMGenerator(renderer);

        const scene = new THREE.Scene();
        scene.environment = pmremGenerator.fromScene(
            new RoomEnvironment(),
            1
        ).texture;

        // lightning and casting shadows
        const light = new THREE.DirectionalLight(0x404040, 1); // soft white light
        light.position.set(15, 20, 0);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;

        light.shadow.mapSize.width = 512; // default
        light.shadow.mapSize.height = 512; // default
        scene.add(light);
        scene.add(light.target);

        // helpers
        const controls = new OrbitControls(camera, renderer.domElement); // allow users to view around the model
        controls.enableZoom = false;
        controls.enableDamping = true; // adds a physic effect of "inertia" when spinning camera
        controls.maxPolarAngle = Math.PI / 2 - 0.3; // don't let user view below the ground, 0.3 is slightly above the base level
        controls.minDistance = 10; // don't let user zoom too close
        controls.maxDistance = 50; // don't let user zoom too far away

        controls.enableRotate = true;
        controls.rotateSpeed = 0.3; // set rotation speed of the mouse

        controls.autoRotate = true; // auto rotate
        controls.autoRotateSpeed = 1.5; // 30 seconds per orbit when fps is 60


        const animate = () => {
            requestAnimationFrame(animate);
            
            const width = window.innerWidth/2;
            const height = window.innerHeight/2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    }
};
</script>

<style scoped>
#threejs-container {
    display: flex;
    justify-content: center;
    text-align: center;
}

#threejs-container > canvas {
    display: inline;
}
</style>
