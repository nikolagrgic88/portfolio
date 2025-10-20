import { useState, useRef, Suspense, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random";

const Stars = memo((props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inCircle(new Float32Array(800 * 3), { radius: 0.6 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <Points
      ref={ref}
      positions={sphere}
      stride={3}
      frustumCulled
      rotation={[0, 0, Math.PI / 4]}
      {...props}
    >
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.001}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
});
Stars.displayName = "Stars";
const StarsCanvas = () => {
  return (
    <div className="w-full h-[70rem] inset-0 z-[-1] absolute ">
      <Canvas camera={{ position: [0, 0, 0.01] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
