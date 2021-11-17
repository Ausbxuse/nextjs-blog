import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

export default function Box(props) {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // use effect?
    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)
    const [z, setZ] = useState(props.z)


    useFrame(() => {
	// mesh.current.rotation.x += 0.01;
	// setX(x => x - 1)
    })

    function rotate() {
	setX(x => x - 1);
    }
    useEffect(()=>{
	const obj = mesh.current;
	// obj.rotation.x += 1;
    },[])
    
    return (
	<RoundedBox
	    args={[1, 1, 1]}
	    {...props}
	    position={[x, y, z]} 
	    ref={mesh}
	    scale={[4.8, 4.8, 4.8]}
	    onClick={rotate}
	    onPointerOver={() => setHover(true)}
	    onPointerOut={() => setHover(false)}
	>
	    <meshStandardMaterial
		attach="material"
		color={hovered ? '#2b6c76' : '#1c1e26'}
	    />
	</RoundedBox>
    )
}
