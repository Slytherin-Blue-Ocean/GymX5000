import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AvocadoFunc from './assets/AvocadoFunc.js';


const Avocado = () => {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[-2, 5, 2]} intensity={1}/>
      <Suspense fallback={null}>
        <AvocadoFunc />
      </Suspense>
    </Canvas>
  );
};

export default Avocado;