"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function RotatingModel() {
  const { scene } = useGLTF("/models/portfolio.glb");
  const clone = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.8;
      // Gentle floating bob
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 - 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Reduced scale so it perfectly fits in the corner widget */}
      <primitive object={clone} scale={1.2} />
    </group>
  );
}

export default function CornerWidget() {
  return (
    <div className="fixed bottom-6 right-6 w-32 h-32 md:w-48 md:h-48 z-[100] pointer-events-auto cursor-pointer group">
      {/* Background glowing orb behind the model */}
      <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} className="relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[5, 10, 5]} intensity={2.5} color="#7dd3fc" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#c084fc" />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <RotatingModel />
          </Float>
        </Suspense>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
