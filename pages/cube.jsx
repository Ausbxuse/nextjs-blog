import { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import Box from '../components/box'
import Center from '../components/center'
import Edge from '../components/edge'
import Corner from '../components/corner'
import styles from '../components/box.module.css'
import utilStyles from '../styles/utils.module.css'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'


export default function BoxesPage() {

    const center1 = useRef()
    const center2 = useRef()
    const center3 = useRef()
    const center4 = useRef()
    const center5 = useRef()
    const center6 = useRef()

    const corner1 = useRef()
    const corner2 = useRef()
    const corner3 = useRef()
    const corner4 = useRef()
    const corner5 = useRef()
    const corner6 = useRef()
    const corner7 = useRef()
    const corner8 = useRef()

    const edge1 = useRef()
    const edge2 = useRef()
    const edge3 = useRef()
    const edge4 = useRef()
    const edge5 = useRef()
    const edge6 = useRef()
    const edge7 = useRef()
    const edge8 = useRef()
    const edge9 = useRef()
    const edge10 = useRef()
    const edge11 = useRef()
    const edge12 = useRef()

    const [key, setKey] = useState("")

    useEffect(()=>{
	// todo
    },[])

    function arraySwap(arr, index1, index2) {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    };

    var cornerState = [corner1, corner2, corner3, corner4, corner5, corner6, corner7, corner8]
    var edgeState = [edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11, edge12]
    const centers = [center1, center2, center3, center4, center5, center6]

    function move(corners, edges, axis, direction, center, notPrime) {
	// var tween = new TWEEN.Tween(position)
	if (direction==="positive") {
	    if (axis === "y") {
		var axis = new THREE.Vector3(0,1,0)
		for (var i in corners) {
		    cornerState[corners[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		    edgeState[edges[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		}
		centers[center].current.rotateOnWorldAxis(axis, Math.PI / 2);
	    } else if (axis === "x") {
		var axis = new THREE.Vector3(1,0,0)
		for (var i in corners) {
		    cornerState[corners[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		    edgeState[edges[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		}
		centers[center].current.rotateOnWorldAxis(axis, Math.PI / 2);
	    } else if (axis === "z") {
		var axis = new THREE.Vector3(0,0,1)
		for (var i in corners) {
		    cornerState[corners[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		    edgeState[edges[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		}
		centers[center].current.rotateOnWorldAxis(axis, Math.PI / 2);
	    }
	} else if (direction==="negative") {
	    if (axis === "y") {
		var axis = new THREE.Vector3(0,-1,0)
		for (var i in corners) {
		    cornerState[corners[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		    edgeState[edges[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		}
		centers[center].current.rotateOnWorldAxis(axis, Math.PI / 2);
	    } else if (axis === "x") {
		var axis = new THREE.Vector3(-1,0,0)
		for (var i in corners) {
		    cornerState[corners[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		    edgeState[edges[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		}
		centers[center].current.rotateOnWorldAxis(axis, Math.PI / 2);
	    } else if (axis === "z") {
		var axis = new THREE.Vector3(0,0,-1)
		for (var i in corners) {
		    cornerState[corners[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		    edgeState[edges[i]].current.rotateOnWorldAxis(axis, Math.PI / 2);
		}
		centers[center].current.rotateOnWorldAxis(axis, Math.PI / 2);
	    }
	}

	// clockwise cycle
	if (notPrime) {
	    for (var i=0; i < 3; i++) {
		arraySwap(cornerState, corners[i], corners[3])
		arraySwap(edgeState, edges[i], edges[3])
	    }
	} else {
	    for (var i=2; i >= 0; i--) {
		arraySwap(cornerState, corners[i], corners[3])
		arraySwap(edgeState, edges[i], edges[3])
	    }
	}
    } 

    function U() {
	move([0,1,2,3],[0,1,2,3],"y","negative", 0, true)
    }

    function Up() {
	move([0,1,2,3],[0,1,2,3],"y","positive", 0, false)
    }

    function D() {
	move([4,5,6,7],[4,5,6,7],"y","negative", 1, true)
    }

    function Dp() {
	move([4,5,6,7],[4,5,6,7],"y","positive", 1, false)
    }

    function R() {
	move([3,2,6,7],[3,11,7,8],"x","negative", 5, true)
    }
    function Rp() {
	move([3,2,6,7],[3,11,7,8],"x","positive", 5, false)
    }
    function F() {
	move([0,3,7,4],[0,8,4,9],"z","negative", 2, true)
    }
    function Fp() {
	move([0,3,7,4],[0,8,4,9],"z","positive", 2, false)
    }

    // handle keys
    function keyDownHandler(event) {
	if (event.code === "KeyR") {
	    Up()
	}
	else if (event.code === "KeyU") {
	    U()
	} else if (event.code === "KeyK") {
	    R()
	} else if (event.code === "KeyJ") {
	    Rp()
	} else if (event.code === "KeyS") {
	    D()
	} else if (event.code === "KeyL") {
	    Dp()
	} else if (event.code === "KeyG") {
	    F()
	} else if (event.code === "KeyH") {
	    Fp()
	}


    }

    return (
	<div autoFocus tabIndex={0} onKeyDown={(e) => keyDownHandler(e)} className={utilStyles.input}> 
	    <Canvas camera={{ position: [0, 0, 35], aspectRatio: 1 }}>
		<ambientLight intensity={0.5} />
		<pointLight position={[20, 20, 20]} />
		<Stars/>

		<group ref={center1} >
		    <Center x={ 0} y={  5} z={  0} color={"#ffffff"} />
		</group>
		<group ref={center2} >
		    <Center x={ 0} y={ -5} z={  0} color={"#ffff00"} />
		</group>
		<group ref={center3} >
		    <Center x={ 0} y={  0} z={  5} color={"#00ff00"} />
		</group>
		<group ref={center4} >
		    <Center x={-5} y={0} z={0} color={"#ffa500"} />
		</group>
		<group ref={center5} >
		    <Center x={ 0} y={  0} z={ -5} color={"#0000ff"} />
		</group>
		<group ref={center6} >
		    <Center x={5} y={0} z={0} color={"#ff0000"} />
		</group>


		<group ref={corner1} >
		    <Corner x={-5} y={  5} z={  5} color1={"#ffffff"} color2={"#00ff00"} color3={"#ffa500"}/>
		</group>
		<group ref={corner2} >
		    <Corner x={-5} y={  5} z={ -5} color1={"#ffffff"} color2={"#0000ff"} color3={"#ffa500"}/>
		</group>
		<group ref={corner3} >
		    <Corner x={ 5} y={  5} z={ -5} color1={"#ffffff"} color2={"#0000ff"} color3={"#ff0000"}/>
		</group>
		<group ref={corner4} >
		    <Corner x={ 5} y={  5} z={  5} color1={"#ffffff"} color2={"#00ff00"} color3={"#ff0000"}/>
		</group>
		<group ref={corner5} >
		    <Corner x={-5} y={ -5} z={  5} color1={"#ffff00"} color2={"#00ff00"} color3={"#ffa500"}/>
		</group>
		<group ref={corner6} >
		    <Corner x={-5} y={ -5} z={ -5} color1={"#ffff00"} color2={"#0000ff"} color3={"#ffa500"}/>
		</group>
		<group ref={corner7} >
		    <Corner x={ 5} y={ -5} z={ -5} color1={"#ffff00"} color2={"#0000ff"} color3={"#ff0000"}/>
		</group>
		<group ref={corner8} >
		    <Corner x={ 5} y={ -5} z={  5} color1={"#ffff00"} color2={"#00ff00"} color3={"#ff0000"}/>
		</group>



		<group ref={edge1} >
		    <Edge x={  0} y={  5} z={  5} color1={"#ffffff"} color2={"#00ff00"}/>
		</group>
		<group ref={edge2} >
		    <Edge x={-5} y={  5} z={   0} color1={"#ffffff"} color2={"#ffa500"}/>
		</group>
		<group ref={edge3} >
		    <Edge x={  0} y={  5} z={ -5} color1={"#ffffff"} color2={"#0000ff"}/>
		</group>
		<group ref={edge4} >
		    <Edge x={ 5} y={  5} z={   0} color1={"#ffffff"} color2={"#ff0000"}/>
		</group>

		<group ref={edge5} >
		    <Edge x={  0} y={ -5} z={  5} color1={"#ffff00"} color2={"#00ff00"}/>
		</group>
		<group ref={edge6} >
		    <Edge x={-5} y={ -5} z={   0} color1={"#ffff00"} color2={"#ffa500"}/>
		</group>
		<group ref={edge7} >
		    <Edge x={  0} y={ -5} z={ -5} color1={"#ffff00"} color2={"#0000ff"}/>
		</group>
		<group ref={edge8} >
		    <Edge x={ 5} y={ -5} z={   0} color1={"#ffff00"} color2={"#ff0000"}/>
		</group>

		<group ref={edge9} >
		    <Edge x={ 5} y={   0} z={  5} color1={"#00ff00"} color2={"#ff0000"}/>
		</group>
		<group ref={edge10} >
		    <Edge x={-5} y={   0} z={  5} color1={"#00ff00"} color2={"#ffa500"}/>
		</group>
		<group ref={edge11} >
		    <Edge x={-5} y={   0} z={ -5} color1={"#0000ff"} color2={"#ffa500"}/>
		</group>
		<group ref={edge12} >
		    <Edge x={ 5} y={   0} z={ -5} color1={"#0000ff"} color2={"#ff0000"}/>
		</group>

		<OrbitControls />
	    </Canvas>
	</div>
    )
}
