import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

export default function Box(props) {
    const mesh = useRef()

    const angle = Math.PI / 2

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // use effect?
    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)
    const [z, setZ] = useState(props.z)

    const [ox, setOx] = useState(props.ox || 0)
    const [oy, setOy] = useState(props.oy || 0)
    const [oz, setOz] = useState(props.oz || 0)

    // sticker position
    const [x1, setX1] = useState(0)
    const [y1, setY1] = useState(y/10)
    const [z1, setZ1] = useState(0)

    const [x2, setX2] = useState(0)
    const [y2, setY2] = useState(0)
    const [z2, setZ2] = useState(z/10)

    const [x3, setX3] = useState(x/10)
    const [y3, setY3] = useState(0)
    const [z3, setZ3] = useState(0)

    // sticker orientation
    const [ox1, setOx1] = useState(0)
    const [oy1, setOy1] = useState(0)
    const [oz1, setOz1] = useState(0)
				    
    const [ox2, setOx2] = useState(angle)
    const [oy2, setOy2] = useState(0)
    const [oz2, setOz2] = useState(0)

    const [ox3, setOx3] = useState(0)
    const [oy3, setOy3] = useState(0)
    const [oz3, setOz3] = useState(angle)
    // sticker color

    const [color1, setColor1] = useState(props.color1)
    const [color2, setColor2] = useState(props.color2)
    const [color3, setColor3] = useState(props.color3)

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
    )
}
