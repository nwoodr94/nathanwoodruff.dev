import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Three(props) {
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
      onClick={(event) => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <ambientLight intensity={5} />
      <pointLight position={[-1, -1, -1]} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={hovered ? "orange" : "limegreen"} />
    </mesh>
  );
}

export default Three;
