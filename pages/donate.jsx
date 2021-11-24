import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import * as THREE from "three";
import utilStyles from '../styles/utils.module.css'

import { Stars, OrbitControls, Box, RoundedBox } from "@react-three/drei";

const Corner = (props) => {
  const box = useRef()
  const [test, setTest] = useState(0)

  const angle = Math.PI / 2

  // use effect?
  // const [x, setX] = useState(props.x)
  const x = props.x
  const y = props.y
  const z = props.z

  // sticker position
  const x1 = 0
  const y1 = y/10
  const z1 = 0

  const x2 = 0
  const y2 = 0
  const z2 = z/10

  const x3 = x/10
  const y3 = 0
  const z3 = 0

  // sticker orientation
  const ox1 = 0
  const oy1 = 0
  const oz1 = 0

  const ox2 = angle
  const oy2 = 0
  const oz2 = 0

  const ox3 = 0
  const oy3 = 0
  const oz3 = angle
  // sticker color

  const color1 = props.color1
  const color2 = props.color2
  const color3 = props.color3

  const quat = new THREE.Quaternion();

  quat.setFromRotationMatrix( props.matrix )

  useFrame(() => {
    box.current.quaternion.slerp(quat,0.1)
  })

  return (
    <group ref={box} >
      <RoundedBox
        args={[1, 1, 1]}
        {...props}
        position={[x, y, z]} 
        scale={[4.8, 4.8, 4.8]}
        // onClick={rotate}
      >
        <meshStandardMaterial
          attach="material"
          color={'#1c1e26'}
          />
        <RoundedBox
          args={[1, 1, 1]}
          position={[x1, y1, z1]} 
          scale={[0.8, 0.05, 0.8]}
          rotation={[ ox1, oy1, oz1]}
        >
          <meshStandardMaterial
            attach="material"
            color={color1}
            />
        </RoundedBox>
        <RoundedBox
          args={[1, 1, 1]}
          position={[x2, y2, z2]} 
          scale={[0.8, 0.05, 0.8]}
          rotation={[ ox2, oy2, oz2 ]}
        >
          <meshStandardMaterial
            attach="material"
            color={color2}
            />
        </RoundedBox>
        <RoundedBox
          args={[1, 1, 1]}
          position={[x3, y3, z3]} 
          scale={[0.8, 0.05, 0.8]}
          rotation={[ ox3, oy3, oz3 ]}
        >
          <meshStandardMaterial
            attach="material"
            color={color3}
            />
        </RoundedBox>
      </RoundedBox>
    </group>
  )
}

export default function App() {
  const mesh = useRef()
  const angle = - Math.PI / 2  // clockwise 90 degrees

  // var corner3 = new Cor( 5,   5,   5, "#ffffff", "#00ff00", "#ff0000")
  const [matrix, setMatrix] = useState(new THREE.Matrix4())
  const [tmp, setTmp ] = useState(true) // tmp var or else won't animate 
  const rMatX = new THREE.Matrix4().makeRotationX( angle )
  const rMatY = new THREE.Matrix4().makeRotationY( angle )
  const rMatZ = new THREE.Matrix4().makeRotationZ( angle )

  const [ori, setOri] = useState(0) // 0 means right ori, 1 means a 90 deg clockwise away from 0

  function keyDownHandler(event) {
    if (event.code === "KeyK") {
      // if at corners[0 or 2]. note that it is just R!! can't be R2
      // if at corners[1,3], do the rotation twice??
      // if (ori === 0 ) {
      //   console.log
      //   corner3.mat.multiply(rMatX)
      // } else if (ori === 1) {
      //   corner3.mat.multiply(rMatZ)
      // } else { //when ori === 2
      //   corner3.mat.multiply(rMatY)
      // }

      console.log(mesh.current)
      setOri((ori+1)%3)
    } else if (event.code === "KeyU") {
      corner3.mat.multiply(rMatY)
      setTmp(!tmp)
    } else if (event.code === "KeyH") {
      corner3.mat.multiply(rMatZ)
      setTmp(!tmp)
    }

    // setMatrix(corner3.Mat)
  }

  return (
    <div autoFocus tabIndex={0} onKeyDown={(e) => keyDownHandler(e)}  className={utilStyles.input}> 
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 20, 20]} />
        <Corner ref={mesh} x={ 5} y={  5} z={  5} color1={"#ffffff"} color2={"#00ff00"} color3={"#ff0000"} matrix={matrix} ori={ori}/>
        <Box position={[0,0,0]}/>
        <Stars />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
