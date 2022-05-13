import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/avocado.gltf');
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <group ref={group, mesh} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -2]} scale={2}>
          <mesh geometry={nodes.Circle_0.geometry} material={materials.bake} />
          <mesh geometry={nodes.Circle_0_1.geometry} material={materials.bake} />
          <mesh geometry={nodes.Circle_0_2.geometry} material={materials.bake} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/avocado.gltf');
