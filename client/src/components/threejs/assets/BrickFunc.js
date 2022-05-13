import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/brick.gltf');
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <group ref={group, mesh} {...props} dispose={null}>
      <group position={[0.12, -2.15, -12.71]} rotation={[1.2, 0, 0.02]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.LIBRA1_1_LIBRA1_1_0.geometry} material={materials.LIBRA1_1} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/brick.gltf');
