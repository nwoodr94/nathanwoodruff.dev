import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Three() {
  const mesh = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y += 0.015;
    mesh.current.rotation.x += 0.015;
  });

  return (
    <mesh
      ref={mesh}
      scale={clicked ? 1.2 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <ambientLight intensity={1} />
      <directionalLight />
      <pointLight position={[10, 10, 10]} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={hovered ? "gray" : "white"} />
    </mesh>
  );
}

export default Three;
