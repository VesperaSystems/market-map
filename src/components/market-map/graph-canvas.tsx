"use client";

import { Line, OrbitControls, Stars, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo, useState } from "react";

import { PositionedVentureNode, VentureEdge } from "@/types/venture";

interface GraphCanvasProps {
  nodes: PositionedVentureNode[];
  edges: VentureEdge[];
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string | null) => void;
}

function GraphScene({ nodes, edges, selectedNodeId, onSelectNode }: GraphCanvasProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes]);

  return (
    <>
      <color attach="background" args={["#020617"]} />
      <fog attach="fog" args={["#020617", 18, 52]} />
      <ambientLight intensity={1.1} />
      <pointLight position={[18, 20, 12]} intensity={90} color="#67e8f9" />
      <pointLight position={[-18, -12, -10]} intensity={70} color="#f472b6" />
      <Stars radius={60} depth={30} count={1500} factor={3} fade speed={0.8} />

      {edges.map((edge) => {
        const source = nodeMap.get(edge.source);
        const target = nodeMap.get(edge.target);
        if (!source || !target) return null;

        const active = selectedNodeId && (edge.source === selectedNodeId || edge.target === selectedNodeId);

        return (
          <Line
            key={edge.id}
            points={[source.position, target.position]}
            color={active ? "#a5f3fc" : "#334155"}
            transparent
            opacity={active ? 0.9 : 0.35}
            lineWidth={active ? 2.5 : Math.max(0.6, edge.strength * 1.4)}
          />
        );
      })}

      {nodes.map((node) => {
        const isSelected = selectedNodeId === node.id;
        const isHovered = hoveredNodeId === node.id;
        const scale = isSelected ? 1.35 : isHovered ? 1.18 : 1;

        return (
          <group key={node.id} position={node.position}>
            <mesh
              scale={scale}
              onClick={() => onSelectNode(node.id)}
              onPointerOver={() => setHoveredNodeId(node.id)}
              onPointerOut={() => setHoveredNodeId((current) => (current === node.id ? null : current))}
            >
              <sphereGeometry args={[node.radius, 28, 28]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={isSelected ? 0.95 : isHovered ? 0.65 : 0.28}
                roughness={0.15}
                metalness={0.75}
              />
            </mesh>
            {(isSelected || isHovered || node.type === "sector") && (
              <Text
                position={[0, node.radius + 1.4, 0]}
                color={isSelected ? "#f8fafc" : "#cbd5e1"}
                fontSize={node.type === "sector" ? 1.15 : 0.8}
                anchorX="center"
                anchorY="middle"
                maxWidth={10}
              >
                {node.name}
              </Text>
            )}
          </group>
        );
      })}

      <OrbitControls
        enablePan
        enableZoom
        maxDistance={50}
        minDistance={10}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </>
  );
}

export function GraphCanvas(props: GraphCanvasProps) {
  return (
    <div className="h-full min-h-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-[0_0_80px_rgba(34,211,238,0.08)]">
      <Canvas camera={{ position: [0, 10, 28], fov: 48 }}>
        <GraphScene {...props} />
      </Canvas>
    </div>
  );
}
