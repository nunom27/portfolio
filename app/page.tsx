'use client'

import { Canvas } from "@react-three/fiber";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import { Euler } from "three";

export default function Home() {
  const [rotations, setRotation] = useState(new Euler(0, 45, 45));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(prevRotations => new Euler(prevRotations.x, prevRotations.y + 0.1, prevRotations.z));
    }, 100);

    return () => {
      clearInterval(intervalId);
    }
  }, [rotations])
  

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-20">
      <Projects />
      <div id="canvas-container" className="w-full h-full">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh rotation={rotations}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </Canvas>
      </div>
    </main>
  );
}
