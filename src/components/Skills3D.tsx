import React, { useRef, useState, useMemo, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  connections: string[];
  position: [number, number, number];
}

const skillsData: Skill[] = [
  // Backend
  { id: 'java', name: 'Java', category: 'Backend', description: 'Strong foundation in Java for building scalable backend applications.', connections: ['sql', 'aws'], position: [-3, 2, 0] },
  { id: 'php', name: 'PHP', category: 'Backend', description: 'Server-side scripting for web development and dynamic content.', connections: ['sql'], position: [-1.5, 2.5, 0] },
  { id: 'sql', name: 'SQL', category: 'Data', description: 'Relational database management and complex query optimization.', connections: ['java', 'php'], position: [-4.5, 1.5, 0] },
  
  // Cloud & DevOps
  { id: 'aws', name: 'AWS', category: 'Cloud', description: 'Deploying and managing infrastructure on Amazon Web Services.', connections: ['devops', 'java'], position: [1.5, 2.5, 0] },
  { id: 'oracle-cloud', name: 'Oracle Cloud', category: 'Cloud', description: 'Experience with Oracle Cloud Infrastructure (OCI) for enterprise workloads.', connections: ['devops'], position: [3, 3, 0] },
  { id: 'devops', name: 'DevOps', category: 'DevOps', description: 'Implementing CI/CD, automation, and infrastructure as code.', connections: ['aws', 'oracle-cloud', 'docker'], position: [3.5, 1.5, 1] },
  { id: 'docker', name: 'Docker', category: 'DevOps', description: 'Containerization for consistent development and deployment.', connections: ['devops'], position: [4.5, 0, 0] },
  
  // Tools
  { id: 'git', name: 'Git/GitHub', category: 'Tools', description: 'Version control and collaborative development workflows.', connections: ['devops'], position: [0, -1.5, 1] },
];

function SkillNode({ skill, isHovered, isConnected, onHover, onUnhover }: { 
  skill: Skill, 
  isHovered: boolean, 
  isConnected: boolean,
  onHover: () => void, 
  onUnhover: () => void 
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time + skill.position[0]) * 0.1;
    }
  });

  const color = isHovered ? '#818cf8' : isConnected ? '#4f46e5' : '#1e1b4b';
  const scale = isHovered ? 1.2 : isConnected ? 1.1 : 1;

  return (
    <group position={skill.position}>
      <mesh
        ref={meshRef}
        onPointerEnter={(e) => {
          e.stopPropagation();
          onHover();
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          onUnhover();
        }}
        scale={scale}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color={color}
        />
      </mesh>
    </group>
  );
}

function Connections({ hoveredSkillId }: { hoveredSkillId: string | null }) {
  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3, boolean][] = [];
    skillsData.forEach(skill => {
      skill.connections.forEach(targetId => {
        const target = skillsData.find(s => s.id === targetId);
        if (target) {
          const isHighlighted = hoveredSkillId === skill.id || hoveredSkillId === target.id;
          lines.push([
            new THREE.Vector3(...skill.position),
            new THREE.Vector3(...target.position),
            isHighlighted
          ]);
        }
      });
    });
    return lines;
  }, [hoveredSkillId]);

  return (
    <>
      {connections.map(([start, end, isHighlighted], idx) => (
        <Line
          key={idx}
          points={[start, end]}
          color={isHighlighted ? "#818cf8" : "#1e1b4b"}
          lineWidth={isHighlighted ? 2 : 0.5}
          transparent
          opacity={isHighlighted ? 0.8 : 0.2}
        />
      ))}
    </>
  );
}

export function Skills3D() {
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHover = useCallback((id: string | null) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    
    if (id === null) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredSkillId(prev => prev === null ? null : null);
      }, 100);
    } else {
      setHoveredSkillId(prev => prev === id ? prev : id);
    }
  }, []);

  const connectedIds = useMemo(() => {
    if (!hoveredSkillId) return [];
    const skill = skillsData.find(s => s.id === hoveredSkillId);
    return skill ? [...skill.connections, hoveredSkillId] : [];
  }, [hoveredSkillId]);

  const hoveredSkill = useMemo(() => 
    skillsData.find(s => s.id === hoveredSkillId), 
  [hoveredSkillId]);

  return (
    <div className="w-full h-[600px] relative cursor-grab active:cursor-grabbing bg-black/20 rounded-3xl border border-white/10">
      <div className="absolute top-2 left-2 text-[10px] text-white/20 uppercase tracking-widest font-mono z-30">Node Map Container</div>
      <Canvas 
        dpr={1} 
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ background: '#111', border: '1px solid red' }}
      >
        <Suspense fallback={<Html center><div className="text-white font-mono text-xs uppercase tracking-widest">Initializing Neural Map...</div></Html>}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" />
          </mesh>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
          
          <group>
            <Connections hoveredSkillId={hoveredSkillId} />
            {skillsData.map(skill => (
              <SkillNode
                key={skill.id}
                skill={skill}
                isHovered={hoveredSkillId === skill.id}
                isConnected={connectedIds.includes(skill.id)}
                onHover={() => handleHover(skill.id)}
                onUnhover={() => handleHover(null)}
              />
            ))}
          </group>

          <gridHelper args={[30, 30, '#1e1b4b', '#0f172a']} position={[0, -5, 0]} />
        </Suspense>
      </Canvas>

      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-8 right-8 z-20 bg-black/80 backdrop-blur-md border border-indigo-500/50 p-6 rounded-2xl w-72 pointer-events-none shadow-2xl"
          >
            <p className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest mb-1">{hoveredSkill.category}</p>
            <h4 className="text-white text-xl font-bold mb-3">{hoveredSkill.name}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{hoveredSkill.description}</p>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-mono mb-2">Related Tech</p>
              <div className="flex flex-wrap gap-2">
                {hoveredSkill.connections.map(connId => {
                  const conn = skillsData.find(s => s.id === connId);
                  return conn ? (
                    <span key={connId} className="px-2 py-1 bg-indigo-500/10 rounded text-[10px] text-indigo-300 border border-indigo-500/20">
                      {conn.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1e1b4b]" />
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Inactive</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4f46e5]" />
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Connected</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#818cf8]" />
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Active</span>
         </div>
      </div>
    </div>
  );
}
