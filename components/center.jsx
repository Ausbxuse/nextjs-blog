import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

export default function Box(props) {
    const mesh = useRef()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // use effect?
    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)
    const [z, setZ] = useState(props.z)

    const angle = Math.PI / 2

    const [ox, setOx] = useState(( x === 0 && z !== 0 ) ? angle : 0)
    const [oy, setOy] = useState(0)
    const [oz, setOz] = useState((x!==0 && z===0)? angle : 0)

    const [color, setColor] = useState(props.color)

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
	    // {...props}
	    position={[x, y, z]} 
	    ref={mesh}
	    scale={[4.8, 4.8, 4.8]}
	    // onClick={rotate}
	    onPointerOver={() => setHover(true)}
	    onPointerOut={() => setHover(false)}
	>
	    <meshStandardMaterial
		attach="material"
		color={hovered ? '#2b6c76' : '#1c1e26'}
	    />
	    <RoundedBox
		args={[1, 1, 1]}
		position={[x/10, y/10, z/10]} 
		scale={[0.8, 0.05, 0.8]}
		rotation={[ ox, oy, oz]}
	    >
		<meshStandardMaterial
		    attach="material"
		    color={color}
		/>
	    </RoundedBox>
	</RoundedBox>
    )
}
