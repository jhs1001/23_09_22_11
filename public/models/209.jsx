/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 209.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/209.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh01.geometry} material={materials['Material.001']} position={[0, 0, 6]} />
      <mesh geometry={nodes.Mesh05.geometry} material={materials['Material.005']} position={[0, 0, -6]} />
      <mesh geometry={nodes.Mesh03.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Mesh04.geometry} material={materials['Material.004']} position={[0, 0, -3]} />
      <mesh geometry={nodes.Mesh02.geometry} material={materials['Material.002']} position={[0, 0, 3.113]} />
      <mesh geometry={nodes.Mesh06.geometry} material={materials['Material.006']} position={[5, 0, 6]} />
      <mesh geometry={nodes.Mesh07.geometry} material={materials['Material.007']} position={[5, 0, 3]} />
      <mesh geometry={nodes.Mesh08.geometry} material={materials['Material.008']} position={[5, 0, 0]} />
      <mesh geometry={nodes.Mesh09.geometry} material={materials['Material.009']} position={[5, 0, -3]} />
      <mesh geometry={nodes.Mesh10.geometry} material={materials['Material.010']} position={[5, 0, -6]} />
    </group>
  )
}

useGLTF.preload('/209.gltf')
