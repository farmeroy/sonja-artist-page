import { useEffect, useState } from 'react'
console.log('got this far')
import OpenSeaDragon from 'openseadragon';
console.log('imported the drageon')

const OpenSeaViewer = (props) => {
  const image = props.image; 
  const [width, setWidth] = useState('100vw');
  const [height, setHeight] = useState('100vh')

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
    //     if ( event.position.x > 0 ) {
    //       let scrollX = 10
    //     } else {
    //       let scrollX = -10
    //     }

    //     if (event.position.y > 0 ) {
    //       let scrollY =1
    //     } else {
    //       let scrollY = -1
    //     }
    //     viewer.viewport.panBy(1, 2)
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
