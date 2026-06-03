import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial, TorusKnot, Sphere } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.02;
      ref.current.rotation.x += dt * 0.005;
    }
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#a78bfa" size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function Blob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
    ref.current.position.x = (state.mouse.x * 0.3);
    ref.current.position.y = (state.mouse.y * 0.3);
  });
  return (
    <Sphere ref={ref} args={[1.4, 64, 64]} position={[0, 0, 0]}>
      
      <MeshDistortMaterial color="#7c3aed" roughness={0.2} metalness={0.8} distort={0.45} speed={2} emissive="#4c1d95" emissiveIntensity={0.4} />
    </Sphere>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-3.2, 1.4, -1]}>
          <Icosahedron args={[0.5, 0]} />
          <meshStandardMaterial color="#22d3ee" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[3.4, -1.2, -0.5]}>
          <TorusKnot args={[0.4, 0.13, 100, 16]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.9} roughness={0.2} emissive="#7c3aed" emissiveIntensity={0.3} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2.8, 2, -1.5]}>
          <octahedronGeometry args={[0.35]} />
          <meshStandardMaterial color="#67e8f9" wireframe />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={1}>
        <mesh position={[-2.6, -1.6, -0.5]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#c4b5fd" metalness={0.7} roughness={0.3} emissive="#7c3aed" emissiveIntensity={0.2} />
        </mesh>
      </Float>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={["#0a0612"]} />
      <fog attach="fog" args={["#0a0612", 6, 14]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#a78bfa" intensity={2} />
      <pointLight position={[-5, -3, 2]} color="#22d3ee" intensity={1.5} />
      <directionalLight position={[0, 4, 2]} intensity={0.4} />
      <Stars />
      <Blob />
      <FloatingShapes />
    </Canvas>
  );
}
