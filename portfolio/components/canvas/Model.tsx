"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Model() {
  const { scene } = useGLTF("/models/portfolio.glb");
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.8, delta * 5);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.pointer.y * 0.5, delta * 5);
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

// Preload to prevent Suspense hang
useGLTF.preload("/models/portfolio.glb");