import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, MeshTransmissionMaterial, GradientTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';

function LiquidBackground() {
  const mesh = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      mesh.current.rotation.y = Math.cos(time * 0.15) * 0.1;
    }
  });

  return (
    <mesh ref={mesh} scale={[viewport.width * 1.5, viewport.height * 1.5, 1]} position={[0, 0, -2]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshBasicMaterial transparent opacity={0.4}>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={['#050505', '#1e1b4b', '#050505']}
          size={1024}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.children.forEach((child, i) => {
      child.position.y += Math.sin(time + i) * 0.005;
      child.position.x += Math.cos(time + i) * 0.005;
    });
  });

  return (
    <group ref={group}>
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
          <Sphere 
            args={[Math.random() * 0.5 + 0.2, 64, 64]} 
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 5
            ]}
          >
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={1}
              chromaticAberration={0.05}
              anisotropy={0.1}
              distortion={0.1}
              distortionScale={0.1}
              temporalDistortion={0.1}
              clearcoat={1}
              attenuationDistance={0.5}
              attenuationColor="#ffffff"
              color="#4f46e5"
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export function Scene() {
  return (
    <>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      
      <LiquidBackground />
      <FloatingOrbs />
      
      <Environment preset="night" />
    </>
  );
}
