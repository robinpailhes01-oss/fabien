"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* The pearl — a slowly morphing metallic orb, nod to "Maison Perla". */
function Pearl(props: ThreeElements["group"]) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * 0.12;
    mesh.current.rotation.z = Math.sin(t * 0.15) * 0.1;
  });

  return (
    <group {...props}>
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh ref={mesh} scale={1.5}>
          <icosahedronGeometry args={[1, 64]} />
          <MeshDistortMaterial
            color="#c9a86a"
            roughness={0.12}
            metalness={0.9}
            distort={0.32}
            speed={1.4}
            emissive="#7a5f2e"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>
    </group>
  );
}

/* A soft golden dust field that drifts behind the pearl. */
function Dust() {
  const ref = useRef<THREE.Points>(null);
  const count = 700;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#e4cf9f"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* Camera that gently follows the pointer for a parallax feel. */
function ParallaxRig() {
  useFrame((state) => {
    const x = state.pointer.x * 0.6;
    const y = state.pointer.y * 0.4;
    state.camera.position.x += (x - state.camera.position.x) * 0.04;
    state.camera.position.y += (y - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 4]} intensity={2.4} color="#fff6e0" />
      <directionalLight position={[-6, -2, -4]} intensity={1.2} color="#c9a86a" />
      <pointLight position={[0, 0, 4]} intensity={2} color="#e4cf9f" />

      <Pearl position={[0, 0, 0]} />
      <Dust />
      <Sparkles
        count={60}
        scale={9}
        size={2.4}
        speed={0.25}
        opacity={0.5}
        color="#e4cf9f"
      />
      <ParallaxRig />
    </Canvas>
  );
}
