import React, { Suspense } from 'react';
import Box from './Box.js';
import AnimatedSphere from './AnimatedSphere.js';
import KettleFunc from './assets/KettleFunc.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const TestBadge = () => {
  return (
    <div className="home">
      TestBadge
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
          <Kettlebell />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TestBadge;