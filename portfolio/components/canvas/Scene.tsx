"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, Stars, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Model from "./Model";

function AbstractGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.15;
      torusRef.current.rotation.y += delta * 0.2;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y -= delta * 0.1;
      octaRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group position={[0, -0.5, -4]}>
      {/* Inner geometric core */}
      <mesh ref={octaRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial color="#8fb1ff" wireframe opacity={0.15} transparent />
      </mesh>
      {/* Outer elegant ring */}
      <mesh ref={torusRef}>
        <torusGeometry args={[5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#60a5fa" opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

function CameraRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    // Parallax mouse follow effect
    const targetX = (state.pointer.x * Math.PI) / 20;
    const targetY = (state.pointer.y * Math.PI) / 20;
    
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetX, 4, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -targetY, 4, delta);
  });
  return <group ref={group}>{children}</group>;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#7dd3fc" />
      <directionalLight position={[-10, -5, -5]} intensity={1} color="#c084fc" />

      {/* Galactic Atmosphere */}
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={150} scale={15} size={3} speed={0.4} opacity={0.2} color="#60a5fa" />

      <CameraRig>
        <AbstractGeometry />

        <Suspense fallback={null}>
          <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.8}>
            <Model />
          </Float>
        </Suspense>
        
        {/* Ground Shadow */}
        <ContactShadows position={[0, -3, 0]} opacity={0.7} scale={20} blur={2.5} far={4} color="#000000" />
      </CameraRig>

      {/* Premium Metallic Reflections */}
      <Environment preset="city" />
    </Canvas>
  );
}