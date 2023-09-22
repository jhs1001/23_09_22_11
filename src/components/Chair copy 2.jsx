import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import * as THREE from "three";
import { useCustomization } from "../contexts/Customization";

export function Chair(props) {
  const { nodes, materials } = useGLTF('./models/chair.gltf');
  const { material, legs, chairColor, cushionColor } = useCustomization();
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} castShadow>
        <meshStandardMaterial color={chairColor.color} />
      </mesh>
      <mesh
        geometry={nodes.Cushion.geometry}
        position={[0, 0.06, 0.04]}
        castShadow
        >
        <meshStandardMaterial
          color={cushionColor.color}
        />
      </mesh>
      <mesh 
        geometry={nodes.Legs1.geometry} 
        material={materials.Legs} 
        visible={legs === 1}
      />
      <mesh 
        geometry={nodes.Legs2.geometry} 
        material={materials.Legs} 
        visible={legs === 2}
      />
    </group>
  )
}

useGLTF.preload("./models/chair.gltf");
