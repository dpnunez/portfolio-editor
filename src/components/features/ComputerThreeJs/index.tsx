"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";

// Component to handle camera rotation
function CameraController() {
  const { camera } = useThree();
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
    // Calculate camera position based on mouse X
    const radius = 5;
    const angle = mouseX * Math.PI;

    camera.position.x = Math.sin(angle) * radius;
    camera.position.z = Math.cos(angle) * radius;
    camera.position.y = 0;

    // Make camera look at the center
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Simple square component
function Square() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
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

          {/* Camera controller */}
          <CameraController />
        </Suspense>
        <AsciiRenderer fgColor="white" bgColor="black" />
      </Canvas>
    </div>
  );
}
