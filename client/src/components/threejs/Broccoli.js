import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BrocFunc from './assets/BrocFunc.js';


const Broccoli = () => {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[-2, 5, 2]} intensity={1}/>
      <Suspense fallback={null}>
        <BrocFunc />
      </Suspense>
    </Canvas>
  );
};

export default Broccoli;