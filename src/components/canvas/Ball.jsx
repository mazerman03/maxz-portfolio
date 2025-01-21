import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Ball = (props) => {
  
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={5}>
      <ambientLight intensity={1}/>
      <directionalLight positon={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.7}>
      <icosahedronGeometry args={[1, 1]}/>
      <meshStandardMaterial 
        color= "#f804a4"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0,0,1]}
        rotation={[2*Math.PI, 0, 6.25]}
        scale={1}
        flatShading
        map={decal}
      />


      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon, alttext }) => {
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
        <div className="flex justify-center items-start h-screen">
          <img
            src={icon}
            alt={alttext}
            className="max-w-[90%] h-auto"
          />
        </div>
      );
    }
  return (
    <Canvas
    frameloop="always"
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} > 
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
        />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />

    </Canvas>  

  )
}
export default BallCanvas