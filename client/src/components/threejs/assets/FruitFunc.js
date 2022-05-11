import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/fruitbowl.gltf');
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <group ref={group, mesh} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={10}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/fruitbowl.gltf');
