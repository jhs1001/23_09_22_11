import React, { useRef } from 'react'
import { useGLTF, useTexture } from "@react-three/drei";

import { useCustomization } from "../contexts/Customization";

export function Chair(props) {
  const { nodes, materials } = useGLTF('./models/bed003.gltf')
  const { material, legs, chairColor, cushionColor, cushion } = useCustomization();

  const leatherTextureProps = useTexture({
    normalMap: "./textures/leather/Leather_008_Normal.jpg"
  });

  const fabricTextureProps = useTexture({
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg"
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Frame.geometry} material={materials['Frame_0_mat.001']} position={[-0.867, 0.375, 0.075]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={-0.025}>
          <meshStandardMaterial
              color={cushionColor.color}
          />
      </mesh>
      <mesh geometry={nodes.Object011.geometry} material={materials['Mattress_mat.001']} position={[-0.005, 0.314, 0.062]} scale={0.025}>
          <meshStandardMaterial
              {...(material === "leather"
                  ? leatherTextureProps
                  : fabricTextureProps)}
              color={chairColor.color}
          />
      </mesh>
      <mesh geometry={nodes.Object02_1.geometry} material={materials['Pillows_01_mat.001']} position={[-0.449, 0.53, -0.456]} scale={0.025} visible={cushion} />
      <mesh geometry={nodes.Object03_1.geometry} material={materials['Pillows_01_mat.001']} position={[0.688, 0.53, -0.495]} scale={0.025} visible={cushion} />
      <mesh geometry={nodes.Legs3.geometry} material={nodes.Legs3.material} scale={0.001} visible={legs === 1}>
        <mesh geometry={nodes.Op031.geometry} material={materials['Bed2_Headboard_mat.002']} position={[-3.064, 484.732, -994.119]} scale={[28.619, 25.4, 25.4]} />
        <mesh geometry={nodes.Op032.geometry} material={materials['Bed2_Legs_01_mat.002']} position={[-3.064, 281.596, -998.275]} scale={[28.619, 25.4, 25.4]} />
        <mesh geometry={nodes.Op033.geometry} material={materials['Bed2_Legs_01_mat.002']} position={[-3.064, 375.017, -992.505]} scale={[28.619, 25.4, 25.4]} />
        <mesh geometry={nodes.Op034.geometry} material={materials['Bed2_Legs_01_mat.002']} position={[-3.064, 527.749, -993.845]} scale={[28.619, 25.4, 25.4]} />
      </mesh>
      <mesh geometry={nodes.Legs2.geometry} material={nodes.Legs2.material} scale={0.001} visible={legs === 2}>
        <mesh geometry={nodes.Op021.geometry} material={materials['Headboard_mat.001']} position={[437.615, 1087.935, -1028.349]} rotation={[Math.PI / 2, 0, 0]} scale={25.4} />
        <mesh geometry={nodes.Op022.geometry} material={materials['Frame_0_mat.001']} position={[-3.356, 374.539, -1038.052]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={25.4} />
        <mesh geometry={nodes.Op023.geometry} material={materials['Frame_0_mat.001']} position={[437.615, 1087.935, -1026.349]} rotation={[Math.PI / 2, 0, 0]} scale={25.4} />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={nodes.Legs1.material} scale={0.001} visible={legs === 3}>
        <mesh geometry={nodes.Op011.geometry} material={materials['Bed3_Legs_01_mat.001']} position={[-2.031, 596.498, -1043.464]} scale={25.4} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/bed003.gltf')
