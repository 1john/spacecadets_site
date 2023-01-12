// import React, { useRef } from 'react'
// import { useFrame, fontLoader } from '@react-three/fiber'

// function Text(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   // const [hovered, setHover] = useState(false)
//   // const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   // useFrame((state, delta) => (mesh.current.rotation.x += .005))
//   // Return view, these are regular three.js elements expressed in JSX
//   const loader = fontLoader();
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       // scale={active ? 1.5 : 1}
//       // onClick={(event) => setActive(!active)}
//       // onPointerOver={(event) => setHover(true)}
//       // onPointerOut={(event) => setHover(false)}
//     >
//       <sphereGeometry args={[3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2]} />
//       <meshNormalMaterial wireframe />
// {/*      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
// */}    </mesh>
//   )
// }

// export default Text;

import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import boldUrl from '../static/fonts/bold.blob'
import { Text3D } from '@react-three/drei'

export default function Text({ children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }) {
  const config = useMemo(
    () => ({ size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    []
  )
  const mesh = useRef()
  useLayoutEffect((hAlign, vAlign) => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children])
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={boldUrl} {...config}>
        {children}
        <meshNormalMaterial />
      </Text3D>
    </group>
  )
}
