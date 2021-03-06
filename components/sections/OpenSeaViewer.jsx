import { useEffect, useState } from "react";
import OpenSeaDragon from "openseadragon";
import styles from './OpenSeaViewer.module.css';

const OpenSeaViewer = (props) => {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // All references to 'window' must be introduced in useEffect
  useEffect(() => {
    
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const viewer = OpenSeaDragon({
      id: "openseadragon1",
      tileSources: ['/mydz.dzi', '/mydz_green.dzi'],
      prefixUrl: "/openseadragon-images/",
      showNavigationControl: false,
      visibilityRatio: 1,
      constrainDuringPan: true,
      minPixelRatio: 1,
      maxZoomLevel: 25,
      minZoomLevel:1,
      defaultZoomLevel: 5,
      gestureSettingsMouse: {
       scrollToZoom: true, 
      },
      springStiffness: .5,
      animationTime: 5,
      previousButton: 'prevBtn',
      nextButton: 'nextBtn',
      iOSDevice: true,
      navPrevNextWrap: true,
      sequenceMode: true,
      initialPage: 1,
      preserveViewport: false,
      showSequenceControl: true,
      sequenceControlAnchor: false,
      showNavigator: true,
      navigatorWidth: '100%',
      navigatorHeight: '200px',
      navigatorId: 'navigator',
      navigatorDisplayRegionColor: 'white',
      zoomPerClick: 1.2,
    });


      const mouseTracker = new OpenSeaDragon.MouseTracker({
        element: viewer.canvas,
        moveHandler: function (event) {
          const v = viewer.viewport;
          const mouse = event.position;
          const panDelta = v.pointFromPixel(mouse, true);
          v.panTo(panDelta);
          // make sure the image stays in the screen
          v.ensureVisible();
        },
      });


    const resize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
  }, []);

  return (
    <div id="openseadragon1" className={styles.openseadragon} style={{ width: width, height: height }}>

    </div>
  );
};

export default OpenSeaViewer;
