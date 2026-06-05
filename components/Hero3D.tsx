"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import type { Theme } from "./ThemeProvider";

const COUNT = 80;

type Bubble = {
  x: number;
  baseX: number;
  y: number;
  z: number;
  r: number;
  speed: number;
  swayAmp: number;
  swayFreq: number;
  phase: number;
};

const X_RANGE = 9;
const Y_BOTTOM = -7.5;
const Y_TOP = 2;

type Palette = {
  colorA: string;
  colorB: string;
  opacity: number;
  metalness: number;
  roughness: number;
  emissive: string;
  emissiveIntensity: number;
  sparkleColor: string;
  sparkleOpacity: number;
};

const PALETTE: Record<Theme, Palette> = {
  light: {
    colorA: "#c79a45",
    colorB: "#9a6f2a",
    opacity: 0.58,
    metalness: 0.25,
    roughness: 0.35,
    emissive: "#000000",
    emissiveIntensity: 0,
    sparkleColor: "#a87f3e",
    sparkleOpacity: 0.3,
  },
  dark: {
    colorA: "#d9bf86",
    colorB: "#f3e7c8",
    opacity: 0.5,
    metalness: 0.35,
    roughness: 0.12,
    emissive: "#8a6d33",
    emissiveIntensity: 0.3,
    sparkleColor: "#f3e7c8",
    sparkleOpacity: 0.5,
  },
};

/* A field of golden champagne bubbles rising from below,
   gently pushed aside as the cursor passes through them. */
function Bubbles({ palette }: { palette: Palette }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const pointer = useRef(new THREE.Vector2(0, -100));
  const { viewport } = useThree();

  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: COUNT }, () => {
      const baseX = THREE.MathUtils.randFloatSpread(X_RANGE * 2);
      return {
        x: baseX,
        baseX,
        y: THREE.MathUtils.randFloat(Y_BOTTOM, Y_TOP),
        z: THREE.MathUtils.randFloat(-4, 2),
        r: THREE.MathUtils.randFloat(0.018, 0.085),
        speed: THREE.MathUtils.randFloat(0.18, 0.55),
        swayAmp: THREE.MathUtils.randFloat(0.1, 0.45),
        swayFreq: THREE.MathUtils.randFloat(0.3, 0.8),
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  // Per-bubble gold tint.
  const colors = useMemo(() => {
    const a = new THREE.Color(palette.colorA);
    const b = new THREE.Color(palette.colorB);
    const arr = new Float32Array(COUNT * 3);
    const c = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      c.copy(a).lerp(b, Math.random());
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, [palette.colorA, palette.colorB]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const dt = Math.min(delta, 0.05);

    // Pointer -> world coordinates on the z=0 plane.
    const px = (state.pointer.x * viewport.width) / 2;
    const py = (state.pointer.y * viewport.height) / 2;
    pointer.current.lerp(new THREE.Vector2(px, py), 0.08);

    for (let i = 0; i < COUNT; i++) {
      const b = bubbles[i];

      // Rise + reset.
      b.y += b.speed * dt;
      if (b.y > Y_TOP) {
        b.y = Y_BOTTOM;
        b.baseX = THREE.MathUtils.randFloatSpread(X_RANGE * 2);
      }

      // Lateral sway.
      const sway = Math.sin(t * b.swayFreq + b.phase) * b.swayAmp;
      let x = b.baseX + sway;
      let y = b.y;

      // Cursor repulsion (the "déformation au passage de la souris").
      const dx = x - pointer.current.x;
      const dy = y - pointer.current.y;
      const dist = Math.hypot(dx, dy);
      const radius = 2.2;
      if (dist < radius && dist > 0.0001) {
        const force = (1 - dist / radius) ** 2 * 1.1;
        x += (dx / dist) * force;
        y += (dy / dist) * force;
      }

      dummy.position.set(x, y, b.z);
      dummy.scale.setScalar(b.r);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined, undefined, COUNT]}
      frustumCulled={false}
    >
      <sphereGeometry args={[1, 20, 20]} />
      <instancedBufferAttribute attach="instanceColor" args={[colors, 3]} />
      <meshStandardMaterial
        roughness={palette.roughness}
        metalness={palette.metalness}
        transparent
        opacity={palette.opacity}
        emissive={palette.emissive}
        emissiveIntensity={palette.emissiveIntensity}
        depthWrite={false}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

/* Camera with a subtle pointer parallax. */
function ParallaxRig() {
  useFrame((state) => {
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.3;
    state.camera.position.x += (x - state.camera.position.x) * 0.04;
    state.camera.position.y += (y - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D({ theme = "light" }: { theme?: Theme }) {
  const palette = PALETTE[theme];
  const isDark = theme === "dark";

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={isDark ? 0.45 : 0.7} />
      <directionalLight
        position={[3, 6, 4]}
        intensity={isDark ? 2.4 : 1.5}
        color={isDark ? "#fff4dc" : "#ffffff"}
      />
      <directionalLight
        position={[-4, -2, 2]}
        intensity={isDark ? 1 : 0.6}
        color={isDark ? "#c9a86a" : "#a87f3e"}
      />
      {isDark && (
        <pointLight position={[0, -2, 5]} intensity={2} color="#e4cf9f" />
      )}

      <Bubbles palette={palette} />
      <Sparkles
        count={isDark ? 40 : 28}
        scale={[14, 10, 6]}
        size={isDark ? 1.8 : 1.4}
        speed={0.16}
        opacity={palette.sparkleOpacity}
        color={palette.sparkleColor}
      />
      <ParallaxRig />
    </Canvas>
  );
}
