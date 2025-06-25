"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Simple square component with mouse rotation
function Square() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      setMouseX(normalizedX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate the square based on mouse X position
      // Multiply by Math.PI to get full rotation range
      meshRef.current.rotation.y = mouseX * Math.PI;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

// Main component
export default function ComputerThreeJs() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={"loading"}>
          <color attach="background" args={["black"]} />
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          {/* The square */}
          <Square />
        </Suspense>
        <AsciiRenderer fgColor="white" bgColor="black" />
      </Canvas>
    </div>
  );
}
