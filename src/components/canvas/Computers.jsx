import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import  CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
          <hemisphereLight intensity={1} groundColor="black" />
          <pointLight intensity={1}/>
          <spotLight position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />

          <primitive object={computer.scene}
            scale={isMobile ? 0.6 : 0.75}
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
            
          />


    </mesh>
  )
}

const ComputersCanvas = ({imagefallback, alttext}) => {
  const [isMobile, setIsMobile] = useState(false);
  //Took me a while to get this going so commenting for future updates
  useEffect(() => {

    //added listener for changes in screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');

    //set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    //Defined callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    
    //added callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    //removed the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);

    }



  }, [])
  
  if (isMobile) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src={imagefallback}
          alt={alttext}
          className="max-w-[90%] h-auto"
        />
      </div>
    );
  }
  

  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} > 
        <OrbitControls enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
        enableRotate= {isMobile ? false : true}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />

    </Canvas>  





  )

}

export default ComputersCanvas