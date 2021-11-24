import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import Center from '../components/center'
import Edge from '../components/edge'
import Corner from '../components/corner'
import utilStyles from '../styles/utils.module.css'
import * as THREE from 'three'

export default function BoxesPage() {

  const mMat0 = new THREE.Matrix4()
  const mMat1 = new THREE.Matrix4()
  const mMat2 = new THREE.Matrix4()
  const mMat3 = new THREE.Matrix4()
  const mMat4 = new THREE.Matrix4()
  const mMat5 = new THREE.Matrix4()

  const cMat0 = new THREE.Matrix4()
  const cMat1 = new THREE.Matrix4()
  const cMat2 = new THREE.Matrix4()
  const cMat3 = new THREE.Matrix4()
  const cMat4 = new THREE.Matrix4()
  const cMat5 = new THREE.Matrix4()
  const cMat6 = new THREE.Matrix4()
  const cMat7 = new THREE.Matrix4()

  const eMat0 = new THREE.Matrix4()
  const eMat1 = new THREE.Matrix4()
  const eMat2 = new THREE.Matrix4()
  const eMat3 = new THREE.Matrix4()
  const eMat4 = new THREE.Matrix4()
  const eMat5 = new THREE.Matrix4()
  const eMat6 = new THREE.Matrix4()
  const eMat7 = new THREE.Matrix4()
  const eMat8 = new THREE.Matrix4()
  const eMat9 = new THREE.Matrix4()
  const eMat10 = new THREE.Matrix4()
  const eMat11 = new THREE.Matrix4()


  useEffect(()=>{
    // todo
  },[])

  function arraySwap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  };

  const [center0, setM0] = useState({mat: mMat0})
  const [center1, setM1] = useState({mat: mMat1})
  const [center2, setM2] = useState({mat: mMat2})
  const [center3, setM3] = useState({mat: mMat3})
  const [center4, setM4] = useState({mat: mMat4})
  const [center5, setM5] = useState({mat: mMat5})

  const [corner0, setC0] = useState({mat: cMat0, ori: 0})
  const [corner1, setC1] = useState({mat: cMat1, ori: 0})
  const [corner2, setC2] = useState({mat: cMat2, ori: 0})
  const [corner3, setC3] = useState({mat: cMat3, ori: 0})
  const [corner4, setC4] = useState({mat: cMat4, ori: 0})
  const [corner5, setC5] = useState({mat: cMat5, ori: 0})
  const [corner6, setC6] = useState({mat: cMat6, ori: 0})
  const [corner7, setC7] = useState({mat: cMat7, ori: 0})

  const [edge0, setE0] = useState({mat: eMat0, ori: 0})
  const [edge1, setE1] = useState({mat: eMat1, ori: 0})
  const [edge2, setE2] = useState({mat: eMat2, ori: 0})
  const [edge3, setE3] = useState({mat: eMat3, ori: 0})
  const [edge4, setE4] = useState({mat: eMat4, ori: 0})
  const [edge5, setE5] = useState({mat: eMat5, ori: 0})
  const [edge6, setE6] = useState({mat: eMat6, ori: 0})
  const [edge7, setE7] = useState({mat: eMat7, ori: 0})
  const [edge8, setE8] = useState({mat: eMat8, ori: 0})
  const [edge9, setE9] = useState({mat: eMat9, ori: 0})
  const [edge10, setE10] = useState({mat: eMat10, ori: 0})
  const [edge11, setE11] = useState({mat: eMat11, ori: 0})


  const [cornerState, setCornerState] = useState([corner0, corner1, corner2, corner3, corner4, corner5, corner6, corner7])
  const [cornerSetterState, setCornerSetterState] = useState([setC0, setC1, setC2, setC3, setC4, setC5, setC6, setC7])

  const [edgeState, setEdgeState] = useState([edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11])
  const [edgeSetterState, setEdgeSetterState] = useState([setE0, setE1, setE2, setE3, setE4, setE5, setE6, setE7, setE8, setE9, setE10, setE11])

  const [centerState, setCenterState] = useState([center0, center1, center2, center3, center4, center5])
  const [centerSetterState, setCenterSetterState] = useState([setM0, setM1, setM2, setM3, setM4, setM5])

  function move(corners, edges, axis, direction, center, notPrime) {
    if (direction==="positive") {
      const angle = Math.PI / 2  // clockwise 90 degrees
      const rMatX = new THREE.Matrix4().makeRotationX( angle )
      const rMatY = new THREE.Matrix4().makeRotationY( angle )
      const rMatZ = new THREE.Matrix4().makeRotationZ( angle )
      if (axis === "y") {

        for (var i in corners) {
          cornerSetterState[corners[i]]({mat: cornerState[corners[i]].mat.premultiply(rMatY), ...cornerState[corners[i]]})
          edgeSetterState[edges[i]]({mat: edgeState[edges[i]].mat.premultiply(rMatY), ...edgeState[edges[i]]})
        }
        centerSetterState[center]({mat: centerState[center].mat.premultiply(rMatY), ...centerState[center]})
      } else if (axis === "x") {
        for (var i in corners) {
          cornerSetterState[corners[i]]({mat: cornerState[corners[i]].mat.premultiply(rMatX), ...cornerState[corners[i]]})
          edgeSetterState[edges[i]]({mat: edgeState[edges[i]].mat.premultiply(rMatX), ...edgeState[edges[i]]})
        }
        // cornerSetterState[corners[0]]({ori: (cornerState[corners[0]].ori+1)%3, ...cornerState[corners[0]]})
        // cornerSetterState[corners[2]]({ori: (cornerState[corners[2]].ori+1)%3, ...cornerState[corners[2]]})
        // cornerSetterState[corners[1]]({ori: Math.abs(cornerState[corners[1]].ori-1)%3, ...cornerState[corners[1]]})
        // cornerSetterState[corners[3]]({ori: Math.abs(cornerState[corners[3]].ori-1)%3, ...cornerState[corners[3]]})

        centerSetterState[center]({mat: centerState[center].mat.premultiply(rMatX), ...centerState[center]})

      } else if (axis === "z") {
        for (var i in corners) {
          cornerSetterState[corners[i]]({mat: cornerState[corners[i]].mat.premultiply(rMatZ), ...cornerState[corners[i]]})
          edgeSetterState[edges[i]]({mat: edgeState[edges[i]].mat.premultiply(rMatZ), ...edgeState[edges[i]]})
        }

        // cornerSetterState[corners[1]]({ori: (cornerState[corners[0]].ori+1)%3, ...cornerState[corners[0]]})
        // cornerSetterState[corners[3]]({ori: (cornerState[corners[2]].ori+1)%3, ...cornerState[corners[2]]})
        // cornerSetterState[corners[0]]({ori: Math.abs(cornerState[corners[1]].ori-1)%3, ...cornerState[corners[1]]})
        // cornerSetterState[corners[2]]({ori: Math.abs(cornerState[corners[3]].ori-1)%3, ...cornerState[corners[3]]})

        centerSetterState[center]({mat: centerState[center].mat.premultiply(rMatZ), ...centerState[center]})
      }
    } else if (direction==="negative") {
      const angle = - Math.PI / 2  // clockwise 90 degrees
      const rMatX = new THREE.Matrix4().makeRotationX( angle )
      const rMatY = new THREE.Matrix4().makeRotationY( angle )
      const rMatZ = new THREE.Matrix4().makeRotationZ( angle )
      if (axis === "y") {
        for (var i in corners) {
          cornerSetterState[corners[i]]({mat: cornerState[corners[i]].mat.premultiply(rMatY), ...cornerState[corners[i]]})
          edgeSetterState[edges[i]]({mat: edgeState[edges[i]].mat.premultiply(rMatY), ...edgeState[edges[i]]})
        }

        centerSetterState[center]({mat: centerState[center].mat.premultiply(rMatY), ...centerState[center]})
      } else if (axis === "x") {
        // cornerSetterState[corners[1]]({ori: (cornerState[corners[0]].ori+1)%3, ...cornerState[corners[0]]})
        // cornerSetterState[corners[3]]({ori: (cornerState[corners[2]].ori+1)%3, ...cornerState[corners[2]]})
        // cornerSetterState[corners[0]]({ori: Math.abs(cornerState[corners[1]].ori-1)%3, ...cornerState[corners[1]]})
        // cornerSetterState[corners[2]]({ori: Math.abs(cornerState[corners[3]].ori-1)%3, ...cornerState[corners[3]]})

        for (var i in corners) {
          cornerSetterState[corners[i]]({mat: cornerState[corners[i]].mat.premultiply(rMatX), ...cornerState[corners[i]]})
          edgeSetterState[edges[i]]({mat: edgeState[edges[i]].mat.premultiply(rMatX), ...edgeState[edges[i]]})
        }
        centerSetterState[center]({mat: centerState[center].mat.premultiply(rMatX), ...centerState[center]})
      } else if (axis === "z") {
        for (var i in corners) {
          cornerSetterState[corners[i]]({mat: cornerState[corners[i]].mat.premultiply(rMatZ), ...cornerState[corners[i]]})
          edgeSetterState[edges[i]]({mat: edgeState[edges[i]].mat.premultiply(rMatZ), ...edgeState[edges[i]]})
        }

        // cornerSetterState[corners[0]]({ori: (cornerState[corners[0]].ori+1)%3, ...cornerState[corners[0]]})
        // cornerSetterState[corners[2]]({ori: (cornerState[corners[2]].ori+1)%3, ...cornerState[corners[2]]})
        // cornerSetterState[corners[1]]({ori: Math.abs(cornerState[corners[1]].ori-1)%3, ...cornerState[corners[1]]})
        // cornerSetterState[corners[3]]({ori: Math.abs(cornerState[corners[3]].ori-1)%3, ...cornerState[corners[3]]})

        centerSetterState[center]({mat: centerState[center].mat.premultiply(rMatZ), ...centerState[center]})
      }
    }
    if (direction === "negative") {
      for (var i=0; i < 3; i++) {
        var tmpCornerState = cornerState
        arraySwap(tmpCornerState, corners[i], corners[3])
        setCornerState(tmpCornerState)

        var tmpEdgeState = edgeState
        arraySwap(tmpEdgeState, edges[i], edges[3])
        setEdgeState(tmpEdgeState)

        var tmpCornerSetterState = cornerSetterState
        arraySwap(tmpCornerSetterState, corners[i], corners[3])
        setCornerSetterState(tmpCornerSetterState)

        var tmpEdgeSetterState = edgeSetterState
        arraySwap(tmpEdgeSetterState, edges[i], edges[3])
        setEdgeSetterState(tmpEdgeSetterState)

      }
    } else {  // when direction === "positive"
      for (var i=2; i >= 0; i--) {
        var tmpCornerState = cornerState
        arraySwap(tmpCornerState, corners[i], corners[3])
        setCornerState(tmpCornerState)

        var tmpEdgeState = edgeState
        arraySwap(tmpEdgeState, edges[i], edges[3])
        setEdgeState(tmpEdgeState)

        var tmpCornerSetterState = cornerSetterState
        arraySwap(tmpCornerSetterState, corners[i], corners[3])
        setCornerSetterState(tmpCornerSetterState)

        var tmpEdgeSetterState = edgeSetterState
        arraySwap(tmpEdgeSetterState, edges[i], edges[3])
        setEdgeSetterState(tmpEdgeSetterState)
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

  // buggy
  function L() {
    move([0,1,5,4],[1,9,5,10],"x","positive", 3)
  }

  function Lp() {
    move([0,1,5,4],[1,9,5,10],"x","negative", 3)
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
    } else if (event.code === "KeyH") {
      F()
    } else if (event.code === "KeyG") {
      Fp()
    } else if (event.code === "KeyF") {
      Lp()
    } else if (event.code === "KeyD") {
      L()
    }
  }

  return (
    <div autoFocus tabIndex={0} onKeyDown={(e) => keyDownHandler(e)} className={utilStyles.input}> 
      <Canvas camera={{ position: [0, 0, 35], aspectRatio: 1 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 20, 20]} />
        <Stars/>

        <Center x={ 0} y={  5} z={  0} color={"#ffffff"} matrix={center0.mat}/>
        <Center x={ 0} y={ -5} z={  0} color={"#ffff00"} matrix={center1.mat}/>
        <Center x={ 0} y={  0} z={  5} color={"#00ff00"} matrix={center2.mat}/>
        <Center x={-5} y={0}   z={0}   color={"#ffa500"} matrix={center3.mat}/>
        <Center x={ 0} y={  0} z={ -5} color={"#0000ff"} matrix={center4.mat}/>
        <Center x={5} y={0}    z={0}   color={"#ff0000"} matrix={center5.mat}/>

        <Corner x={-5} y={  5} z={  5} color1={"#ffffff"} color2={"#00ff00"} color3={"#ffa500"} matrix={corner0.mat} ori={corner0.ori}/>
        <Corner x={-5} y={  5} z={ -5} color1={"#ffffff"} color2={"#0000ff"} color3={"#ffa500"} matrix={corner1.mat} ori={corner1.ori}/>
        <Corner x={ 5} y={  5} z={ -5} color1={"#ffffff"} color2={"#0000ff"} color3={"#ff0000"} matrix={corner2.mat} ori={corner2.ori}/>
        <Corner x={ 5} y={  5} z={  5} color1={"#ffffff"} color2={"#00ff00"} color3={"#ff0000"} matrix={corner3.mat} ori={corner3.ori}/>
        <Corner x={-5} y={ -5} z={  5} color1={"#ffff00"} color2={"#00ff00"} color3={"#ffa500"} matrix={corner4.mat} ori={corner4.ori}/>
        <Corner x={-5} y={ -5} z={ -5} color1={"#ffff00"} color2={"#0000ff"} color3={"#ffa500"} matrix={corner5.mat} ori={corner5.ori}/>
        <Corner x={ 5} y={ -5} z={ -5} color1={"#ffff00"} color2={"#0000ff"} color3={"#ff0000"} matrix={corner6.mat} ori={corner6.ori}/>
        <Corner x={ 5} y={ -5} z={  5} color1={"#ffff00"} color2={"#00ff00"} color3={"#ff0000"} matrix={corner7.mat} ori={corner7.ori}/>

        <Edge x={  0} y={  5} z={  5} color1={"#ffffff"} color2={"#00ff00"} matrix={edge0.mat} ori={edge0.ori}/>
        <Edge x={-5} y={  5} z={   0} color1={"#ffffff"} color2={"#ffa500"} matrix={edge1.mat} ori={edge1.ori}/>
        <Edge x={  0} y={  5} z={ -5} color1={"#ffffff"} color2={"#0000ff"} matrix={edge2.mat} ori={edge2.ori}/>
        <Edge x={ 5} y={  5} z={   0} color1={"#ffffff"} color2={"#ff0000"} matrix={edge3.mat} ori={edge3.ori}/>
        <Edge x={  0} y={ -5} z={  5} color1={"#ffff00"} color2={"#00ff00"} matrix={edge4.mat} ori={edge4.ori}/>
        <Edge x={-5} y={ -5} z={   0} color1={"#ffff00"} color2={"#ffa500"} matrix={edge5.mat} ori={edge5.ori}/>
        <Edge x={  0} y={ -5} z={ -5} color1={"#ffff00"} color2={"#0000ff"} matrix={edge6.mat} ori={edge6.ori}/>
        <Edge x={ 5} y={ -5} z={   0} color1={"#ffff00"} color2={"#ff0000"} matrix={edge7.mat} ori={edge7.ori}/>
        <Edge x={ 5} y={   0} z={  5} color1={"#00ff00"} color2={"#ff0000"} matrix={edge8.mat} ori={edge8.ori}/>
        <Edge x={-5} y={   0} z={  5} color1={"#00ff00"} color2={"#ffa500"} matrix={edge9.mat} ori={edge9.ori}/>
        <Edge x={-5} y={   0} z={ -5} color1={"#0000ff"} color2={"#ffa500"} matrix={edge10.mat} ori={edge10.ori}/>
        <Edge x={ 5} y={   0} z={ -5} color1={"#0000ff"} color2={"#ff0000"} matrix={edge11.mat} ori={edge11.ori}/>

        <OrbitControls />
      </Canvas>
    </div>
  )
}
