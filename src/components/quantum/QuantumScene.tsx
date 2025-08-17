import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import anime from 'animejs';

interface QuantumSceneProps {
  children?: React.ReactNode;
  className?: string;
}

const QuantumScene: React.FC<QuantumSceneProps> = ({ children, className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const particleSystemRef = useRef<THREE.Points>();
  const frameRef = useRef<number>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 1000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Quantum Particle System
    const createQuantumParticles = () => {
      const particleCount = window.innerWidth < 768 ? 1000 : 2000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      const quantumColors = [
        new THREE.Color(0x00d4ff), // Quantum Cyan
        new THREE.Color(0x0099cc), // Deep Quantum
        new THREE.Color(0x66e5ff), // Light Quantum
        new THREE.Color(0xffffff), // Quantum Singularity
      ];

      for (let i = 0; i < particleCount; i++) {
        // Position particles in quantum field
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

        // Quantum color distribution
        const color = quantumColors[Math.floor(Math.random() * quantumColors.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        // Quantum size variation
        sizes[i] = Math.random() * 3 + 1;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      // Quantum particle shader material
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pixelRatio: { value: renderer.getPixelRatio() }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            
            // Quantum fluctuation
            mvPosition.x += sin(time * 0.01 + position.y * 0.01) * 10.0;
            mvPosition.y += cos(time * 0.01 + position.x * 0.01) * 10.0;
            mvPosition.z += sin(time * 0.01 + position.z * 0.01) * 5.0;
            
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          uniform float time;
          
          void main() {
            float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
            float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
            
            // Quantum glow effect
            float glow = sin(time * 0.05) * 0.3 + 0.7;
            alpha *= glow;
            
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        transparent: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      particleSystemRef.current = particles;

      return particles;
    };

    const particles = createQuantumParticles();

    // Quantum Neural Network
    const createNeuralNetwork = () => {
      const nodeCount = 50;
      const nodes: THREE.Mesh[] = [];
      const connections: THREE.Line[] = [];

      for (let i = 0; i < nodeCount; i++) {
        const nodeGeometry = new THREE.SphereGeometry(2, 8, 8);
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: 0x00d4ff,
          transparent: true,
          opacity: 0.8
        });
        
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(
          (Math.random() - 0.5) * 500,
          (Math.random() - 0.5) * 500,
          (Math.random() - 0.5) * 200
        );
        
        scene.add(node);
        nodes.push(node);

        // Create connections to nearby nodes
        if (i > 0) {
          const connectionGeometry = new THREE.BufferGeometry();
          const positions = new Float32Array(6);
          
          positions[0] = nodes[i - 1].position.x;
          positions[1] = nodes[i - 1].position.y;
          positions[2] = nodes[i - 1].position.z;
          positions[3] = node.position.x;
          positions[4] = node.position.y;
          positions[5] = node.position.z;
          
          connectionGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          
          const connectionMaterial = new THREE.LineBasicMaterial({
            color: 0x0099cc,
            transparent: true,
            opacity: 0.3
          });
          
          const connection = new THREE.Line(connectionGeometry, connectionMaterial);
          scene.add(connection);
          connections.push(connection);
        }
      }

      return { nodes, connections };
    };

    const neuralNetwork = createNeuralNetwork();

    // Quantum Data Streams
    const createDataStreams = () => {
      const streamCount = 20;
      const streams: THREE.Line[] = [];

      for (let i = 0; i < streamCount; i++) {
        const streamGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(300); // 100 points * 3 coordinates
        
        for (let j = 0; j < 100; j++) {
          positions[j * 3] = (Math.random() - 0.5) * 1000;
          positions[j * 3 + 1] = j * 10 - 500;
          positions[j * 3 + 2] = (Math.random() - 0.5) * 500;
        }
        
        streamGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const streamMaterial = new THREE.LineBasicMaterial({
          color: 0x66e5ff,
          transparent: true,
          opacity: 0.6
        });
        
        const stream = new THREE.Line(streamGeometry, streamMaterial);
        scene.add(stream);
        streams.push(stream);
      }

      return streams;
    };

    const dataStreams = createDataStreams();

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Update particle system
      if (particleSystemRef.current && particleSystemRef.current.material) {
        (particleSystemRef.current.material as THREE.ShaderMaterial).uniforms.time.value = time;
      }

      // Animate neural network
      neuralNetwork.nodes.forEach((node, index) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
        
        // Quantum superposition effect
        const scale = 1 + Math.sin(time * 2 + index) * 0.2;
        node.scale.setScalar(scale);
      });

      // Animate data streams
      dataStreams.forEach((stream, index) => {
        stream.rotation.y += 0.005 * (index + 1);
        stream.position.y = Math.sin(time + index) * 50;
      });

      // Camera quantum fluctuation
      camera.position.x += Math.sin(time * 0.5) * 0.5;
      camera.position.y += Math.cos(time * 0.3) * 0.3;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!camera) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Quantum entanglement with cursor
      anime({
        targets: camera.position,
        x: mouseX * 20,
        y: mouseY * 20,
        duration: 1000,
        easing: 'easeOutQuart'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`quantum-scene ${className || ''}`}>
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      {isLoaded && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default QuantumScene;