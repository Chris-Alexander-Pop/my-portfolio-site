import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundAnimation: React.FC<{}> = (): JSX.Element => {
  const mountRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set the background color to white

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Create particles
    const particles = new THREE.BufferGeometry();
    const particleCount = 500; // Reduced number of particles
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const sprite = new THREE.TextureLoader().load('/circle.png'); // Add a circular texture

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.01, // Adjust particle size if necessary
      map: sprite,
      transparent: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the particle system for a gentle animation
      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [mountRef]);

  return (
    <div ref={mountRef} className="fixed inset-0 z-0"/>
  );
};

export default BackgroundAnimation;
