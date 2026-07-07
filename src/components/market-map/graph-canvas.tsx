"use client";

import { Line, OrbitControls, Stars, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Group } from "three";

import { PositionedVentureNode, VentureEdge } from "@/types/venture";

interface GraphCanvasProps {
  nodes: PositionedVentureNode[];
  edges: VentureEdge[];
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string | null) => void;
  compact?: boolean;
}

function DriftingNode({
  node,
  isSelected,
  isHovered,
  onSelectNode,
  onHover,
  compact = false,
}: {
  node: PositionedVentureNode;
  isSelected: boolean;
  isHovered: boolean;
  onSelectNode: (nodeId: string | null) => void;
  onHover: (nodeId: string | null) => void;
  compact?: boolean;
}) {
  const groupRef = useRef<Group>(null);
  const offset = node.position[0] * 0.37 + node.position[1] * 0.22;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * 0.22 + offset;
    groupRef.current.position.set(
      node.position[0] + Math.sin(t) * 0.18,
      node.position[1] + Math.cos(t * 1.2) * 0.14,
      node.position[2] + Math.sin(t * 0.85) * 0.12,
    );
  });

  const scale = isSelected ? 1.26 : isHovered ? 1.12 : 1;

  return (
    <group ref={groupRef} position={node.position}>
      <mesh
        scale={scale}
        onClick={() => onSelectNode(node.id)}
        onPointerOver={() => onHover(node.id)}
        onPointerOut={() => onHover(null)}
      >
        <sphereGeometry args={[node.radius * (compact ? 0.82 : 1), 22, 22]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isSelected ? 0.68 : isHovered ? 0.44 : 0.18}
          roughness={0.18}
          metalness={0.76}
        />
      </mesh>
      {(isSelected || isHovered || (!compact && node.type === "sector")) && (
        <Text
          position={[0, node.radius + (compact ? 0.9 : 1.2), 0]}
          color={isSelected ? "#ffffff" : "#d4d4d4"}
          fontSize={compact ? 0.54 : node.type === "sector" ? 0.9 : 0.68}
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
        >
          {node.name}
        </Text>
      )}
    </group>
  );
}

function GraphScene({ nodes, edges, selectedNodeId, onSelectNode, compact }: GraphCanvasProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const nodeMap = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes]);

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 20, 55]} />
      <ambientLight intensity={0.55} />
      <pointLight position={[18, 20, 12]} intensity={42} color="#f5f5f5" />
      <pointLight position={[-18, -12, -10]} intensity={28} color="#a3a3a3" />
      <Stars radius={65} depth={34} count={1400} factor={3.2} fade speed={0.42} saturation={0} />

      {edges.map((edge, index) => {
        const source = nodeMap.get(edge.source);
        const target = nodeMap.get(edge.target);
        if (!source || !target) return null;

        const active = selectedNodeId && (edge.source === selectedNodeId || edge.target === selectedNodeId);

        return (
          <Line
            key={edge.id}
            points={[source.position, target.position]}
            color={active ? "#fafafa" : index % 4 === 0 ? "#a3a3a3" : "#404040"}
            transparent
            opacity={active ? 0.88 : index % 4 === 0 ? 0.3 : 0.18}
            lineWidth={active ? 1.9 : Math.max(0.45, edge.strength)}
            dashed={!active && index % 3 === 0}
            dashScale={12}
            gapSize={0.55}
            dashSize={0.95}
          />
        );
      })}

      {nodes.map((node) => (
        <DriftingNode
          key={node.id}
          node={node}
          isSelected={selectedNodeId === node.id}
          isHovered={hoveredNodeId === node.id}
          onSelectNode={onSelectNode}
          onHover={setHoveredNodeId}
          compact={compact}
        />
      ))}

      <OrbitControls
        enablePan
        enableZoom
        maxDistance={50}
        minDistance={10}
        autoRotate
        autoRotateSpeed={0.22}
      />
    </>
  );
}

export function GraphCanvas(props: GraphCanvasProps) {
  const { compact = false } = props;

  return (
    <div className="hud-panel relative h-full min-h-[620px] overflow-hidden">
      {!compact ? (
        <div className="pointer-events-none absolute left-4 top-4 z-10 border border-white/12 bg-[rgba(8,8,8,0.8)] px-3 py-2">
          <p className="hud-label">Graph Status</p>
          <p className="mt-1 text-xs text-zinc-300">Animated fictional venture network</p>
        </div>
      ) : null}
      <Canvas camera={{ position: [0, 10, 28], fov: 48 }}>
        <GraphScene {...props} compact={compact} />
      </Canvas>
    </div>
  );
}
