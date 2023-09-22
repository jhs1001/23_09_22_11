import React, { useState } from 'react';  // useState를 추가
import { useGLTF } from "@react-three/drei";

export function Chair(props) {
  const { nodes, materials } = useGLTF('./models/209.gltf')
  const [copyTextures, setCopyTextures] = useState(false);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh01.geometry} material={copyTextures ? materials['Material.006'] : materials['Material.001']} position={[0, 0, 6]} />
      <mesh geometry={nodes.Mesh05.geometry} material={copyTextures ? materials['Material.007'] : materials['Material.005']} position={[0, 0, -6]} />
      <mesh geometry={nodes.Mesh03.geometry} material={copyTextures ? materials['Material.008'] : materials['Material.003']} />
      <mesh geometry={nodes.Mesh04.geometry} material={copyTextures ? materials['Material.009'] : materials['Material.004']} position={[0, 0, -3]} />
      <mesh geometry={nodes.Mesh02.geometry} material={copyTextures ? materials['Material.010'] : materials['Material.002']} position={[0, 0, 3.113]} />
      <mesh geometry={nodes.Mesh06.geometry} material={materials['Material.006']} position={[5, 0, 6]} />
      <mesh geometry={nodes.Mesh07.geometry} material={materials['Material.007']} position={[5, 0, 3]} />
      <mesh geometry={nodes.Mesh08.geometry} material={materials['Material.008']} position={[5, 0, 0]} />
      <mesh geometry={nodes.Mesh09.geometry} material={materials['Material.009']} position={[5, 0, -3]} />
      <mesh geometry={nodes.Mesh10.geometry} material={materials['Material.010']} position={[5, 0, -6]} />
    </group>
  )
}

useGLTF.preload('./models/209.gltf')
