import { useThree, useFrame, extend } from '@react-three/fiber';
import { useRef} from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

extend({ OrbitControls })

export default function Experience() {

    const { camera, gl } = useThree()

    const cubeRef = useRef();

    useFrame((state, delta) => {
        //called on each frame before rendering
        cubeRef.current.rotation.y += delta * 0.25;
        // groupRef.current.rotation.y += delta;
        // console.log('tick');
    })

    return <>

        <directionalLight 
            position={[1, 2, 3]}
            intensity={ [2.5] }  
        />
        <ambientLight
            intensity={ [0.5] }
        />

        <orbitControls args={[camera, gl.domElement]} />

        <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} 
                position-x={0} 
                scale={3.0}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>


        {/* <group ref={groupRef} rotation-y={-Math.PI * 0.05}>
            <mesh position-x={- 2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </group> */}
    </>
}