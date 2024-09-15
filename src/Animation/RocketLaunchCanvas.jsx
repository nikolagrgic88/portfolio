import { useState, useRef, Suspense, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";


const RocketExhaust = memo((props) => {
  const ref = useRef();
  const [particles] = useState(() => {
    const positions = new Float32Array(700 * 3);

    // Init. particle positions rocket nozzle
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0.5;
      positions[i * 3 + 2] = 0;
    }
    return positions;
  });

  useFrame((state, delta) => {
    for (let i = 0; i < 700; i++) {
      particles[i * 3 + 1] -= delta * 0.1 + Math.random() * 0.05;
      particles[i * 3] += (Math.random() - 0.5) * 0.04;
      particles[i * 3 + 2] += (Math.random() - 0.5) * 0.005;
      if (particles[i * 3 + 1] < -0.5) {
        particles[i * 3] = 0;
        particles[i * 3 + 1] = 0.5;
        particles[i * 3 + 2] = 0;
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled {...props}>
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.019}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
});

const RocketLaunchCanvas = () => {
  return (
    <div className="w-20 h-30  z-[-1] absolute -top-5  ">
      <Canvas camera={{ position: [0, 0, 0.7] }}>
        <Suspense fallback={null}>
          <RocketExhaust />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default RocketLaunchCanvas;
