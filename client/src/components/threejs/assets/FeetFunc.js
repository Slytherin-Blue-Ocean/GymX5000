import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/feet.gltf');
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <group ref={group, mesh} {...props} dispose={null}>
      <group position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={.1} >
        <mesh geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  );
}

useGLTF.preload('/feet.gltf');
