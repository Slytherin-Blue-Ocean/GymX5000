import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WireYogaFunc from './assets/WireYogaFunc.js';


const WireYoga = () => {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[-2, 5, 2]} intensity={1}/>
      <Suspense fallback={null}>
        <WireYogaFunc />
      </Suspense>
    </Canvas>
  );
};

export default WireYoga;