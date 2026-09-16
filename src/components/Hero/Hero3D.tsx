import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

const BLUEPRINT = "#3f7bb0";
const STEEL = "#9aa1a6";
const BRASS = "#c97b3d";

interface GearRingProps {
  radius: number;
  teeth: number;
  depth: number;
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  speed: number;
}

function GearRing({ radius, teeth, depth, position, rotation, color, speed }: GearRingProps) {
  const ref = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const inner = radius * 0.72;
    const outer = radius;
    const step = (Math.PI * 2) / (teeth * 2);

    shape.moveTo(outer, 0);
    for (let i = 0; i < teeth * 2; i++) {
      const angle = step * (i + 1);
      const r = i % 2 === 0 ? outer : inner;
      shape.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    }
    shape.closePath();

    const holeRadius = radius * 0.32;
    const hole = new THREE.Path();
    hole.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    return new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: false,
      curveSegments: 24,
    });
  }, [radius, teeth, depth]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += speed * delta;
  });

  return (
    <group position={position} rotation={rotation} ref={ref}>
      <mesh geometry={geometry}>
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function DriftingBolt(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() + offset;
    ref.current.position.y += Math.sin(t * 0.6) * 0.0015;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.2;
  });

  return (
    <mesh ref={ref} {...props}>
      <octahedronGeometry args={[0.18, 0]} />
      <meshBasicMaterial color={STEEL} wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current || reducedMotion) return;
    const { pointer } = state;
    group.current.rotation.y += (pointer.x * 0.3 - group.current.rotation.y) * 0.02;
    group.current.rotation.x += (-pointer.y * 0.15 - group.current.rotation.x) * 0.02;
  });

  const speedFactor = reducedMotion ? 0 : 1;

  return (
    <group ref={group}>
      <GearRing
        radius={1.9}
        teeth={14}
        depth={0.14}
        position={[-0.6, 0.3, 0]}
        rotation={[0.3, 0.5, 0]}
        color={BLUEPRINT}
        speed={0.12 * speedFactor}
      />
      <GearRing
        radius={1.15}
        teeth={10}
        depth={0.14}
        position={[1.1, -0.4, 0.6]}
        rotation={[0.6, -0.2, 0.4]}
        color={STEEL}
        speed={-0.2 * speedFactor}
      />
      <GearRing
        radius={0.7}
        teeth={8}
        depth={0.12}
        position={[0.3, 1.1, -0.4]}
        rotation={[-0.4, 0.3, 0.2]}
        color={BRASS}
        speed={0.28 * speedFactor}
      />

      <DriftingBolt position={[-1.8, -1, 0.8]} />
      <DriftingBolt position={[1.9, 1.3, -0.6]} />
      <DriftingBolt position={[-1.2, 1.6, 0.3]} />
      <DriftingBolt position={[2.1, -1.2, 0.2]} />
    </group>
  );
}

export default function Hero3D({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
