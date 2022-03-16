import { useEffect, useState } from 'react'
console.log('got this far')
import OpenSeaDragon from 'openseadragon';
console.log('imported the drageon')

const OpenSeaViewer = (props) => {
  const image = props.image; 
  const [width, setWidth] = useState('800px');
  const [height, setHeight] = useState('400px')

  useEffect(() => {
    const viewer = OpenSeaDragon({
    id: "openseadragon1",
    tileSources: '/mydz.dzi',
      prefixUrl: "/openseadragon-images/",
      showNavigationControl: false,
      visibilityRatio: 1,
      constrainDuringPan: true,
    })
    
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
    
    const resize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', resize)

  }, [])
  


  return (
    <div id='openseadragon1' style={{width: width, height: height}}></div>
  )
}

export default OpenSeaViewer;
