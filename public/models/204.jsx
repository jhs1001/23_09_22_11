/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 204.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/204.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh01.geometry} material={materials['Material.005']} position={[0, 0.708, 6.106]} />
      <mesh geometry={nodes.Mesh05.geometry} material={materials['Material.004']} position={[0, 0, 2.744]} />
      <mesh geometry={nodes.Mesh03.geometry} material={materials['Material.002']} position={[0, 0, -3.539]} />
      <mesh geometry={nodes.Mesh04.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Mesh02.geometry} material={materials['Material.001']} position={[0, 0, -7.11]} />
    </group>
  )
}

useGLTF.preload('/204.gltf')
