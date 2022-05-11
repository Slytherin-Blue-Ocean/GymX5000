import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FruitFunc from './assets/FruitFunc.js';


const Fruitbowl = () => {
  return (
    <Canvas className="canvas">
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[-2, 5, 2]} intensity={1}/>
      <Suspense fallback={null}>
        <FruitFunc />
      </Suspense>
    </Canvas>
  );
};

export default Fruitbowl;