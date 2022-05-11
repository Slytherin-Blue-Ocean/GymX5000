import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import KettleFunc from './assets/KettleFunc.js';


const Kettlebell = () => {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[-2, 5, 2]} intensity={1}/>
      <Suspense fallback={null}>
        <KettleFunc />
      </Suspense>
    </Canvas>
  );
};

export default Kettlebell;