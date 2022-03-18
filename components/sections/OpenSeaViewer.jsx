import { useEffect, useState } from 'react'
console.log('got this far')
import OpenSeaDragon from 'openseadragon';
console.log('imported the drageon')

const OpenSeaViewer = (props) => {
  const image = props.image; 
  const [width, setWidth] = useState('100vw');
  const [height, setHeight] = useState('100vh')

  // All references to 'window' must be introducded in useEffect
  useEffect(() => {
    const viewer = OpenSeaDragon({
    id: "openseadragon1",
    tileSources: '/mydz.dzi',
      prefixUrl: "/openseadragon-images/",
      showNavigationControl: false,
      visibilityRatio: 1,
      constrainDuringPan: true,
    })

    // const mouseTracker = new OpenSeaDragon.MouseTracker({
    //   element: viewer.canvas,
    //   moveHandler: function(event) {
    //     const v = viewer.viewport;
    //     const mouse = event.position;
    //     console.log(mouse)
    //     // v.panTo(v.pointFromPixel(result))
    //   }
    // }
    // )
    
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
