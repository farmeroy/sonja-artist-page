import { useEffect, useState } from "react";
import OpenSeaDragon from "openseadragon";
import BigRoundBtn from '../BigRoundBtn'

const OpenSeaViewer = (props) => {
  const image = props.image;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);


  // All references to 'window' must be introducded in useEffect
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
      defaultZoomLevel: 5,
      visibilityRatio: 1,
      springStiffness: 1,
      animationTime: 20,
      previousButton: '1',
      previousButton: 'prevBtn',
      nextButton: 'nextBtn',
      navPrevNextWrap: true,
      sequenceMode: true,
      initialPage: 1,
      preserveViewport: true,
      showSequenceControl: true,
    });

      const mouseTracker = new OpenSeaDragon.MouseTracker({
        element: viewer.canvas,
        moveHandler: function (event) {
          const v = viewer.viewport;
          const mouse = event.position;
          const panDelta = v.pointFromPixel(mouse, true);
          v.panTo(panDelta);
        },
      });


    const resize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
  }, [props.drawing]);

  return (
    <div id="openseadragon1" style={{ width: width, height: height }}>

    </div>
  );
};

export default OpenSeaViewer;
