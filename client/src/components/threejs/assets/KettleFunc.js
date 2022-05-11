import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF('/kettlebell.gltf');
  const group = useRef();
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <group ref={group, mesh} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={2} >
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.DefaultMaterial} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/kettlebell.gltf');

