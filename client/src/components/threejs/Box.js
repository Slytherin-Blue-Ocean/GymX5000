import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import space from './assets/space.jpg';

const Box = () => {
  const colorMap = useLoader(TextureLoader, space);
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]}/>
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

export default Box;