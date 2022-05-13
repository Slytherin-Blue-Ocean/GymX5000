import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/broccoli.gltf');
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <group ref={group, mesh} {...props} dispose={null}>
      <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={.25} >
        <mesh geometry={nodes.Object_2.geometry} material={materials.broccoli_broccoli} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.broccoli_broccoli} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.broccoli_broccoli} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.broccoli_broccoli} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.broccoli_broccoli} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.broccoli_broccoli} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.broccoli_broccoli} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.initialShadingGroup} />
      </group>
    </group>
  );
}

useGLTF.preload('/broccoli.gltf');
