import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mesh, Color } from 'three';

const AnimatedBackground: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const colorRef = useRef(new Color('#6A0DAD')); // Brighter purple color

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Rotate the sphere
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;

      // Pulsate the sphere
      const scale = 1 + Math.sin(clock.getElapsedTime()) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);

      // Shift colors over time
      const hue = (clock.getElapsedTime() * 0.05) % 1; // Slower color shift
      colorRef.current.setHSL(hue, 0.7, 0.5); // Increased saturation
    }
  });

  return (
    <mesh ref={meshRef} scale={[5, 5, 5]}> {/* Increased scale for more visibility */}
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={colorRef.current}
          attach="material"
          distort={0.4} // Reduced distortion for clearer shape
          speed={1.5}
          roughness={0.1}
          metalness={0.9} // Increased metalness for more reflectivity
        />
      </Sphere>
    </mesh>
  );
};

export default AnimatedBackground;