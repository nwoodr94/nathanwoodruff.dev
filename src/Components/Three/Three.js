// Hooks
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Three() {
  const mesh = useRef();
  const [, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y += 0.015;
    mesh.current.rotation.x += 0.015;
  });

  return (
    <mesh
      ref={mesh}
      scale={clicked ? 1 : 1.2}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <ambientLight intensity={1} />
      <directionalLight />
      <pointLight position={[10, 10, 10]} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"#82ca9d"} />
    </mesh>
  );
}

export default Three;
