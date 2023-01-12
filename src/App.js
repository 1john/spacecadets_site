import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Sphere from './components/sphere';
import Text from './components/text';

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <color attach="background" args={["black"]} />
{/*        <ambientLight />
        <pointLight position={[10, 10, 10]} />*/}
{/*        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />*/}
        <Sphere />
        <Text hAlign="center" vAlign="top" position={[29, 13, -20]} children="SPACECADETS" />
      </Canvas>
    </div>
  );
}

export default App;
