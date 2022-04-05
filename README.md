# Website for Berlin based artist Sonja Offen
This is a very unique website that was designed by the artist and implemented by myself using:
- NextJS
- [Open Seadragon](openseadragon.github.io/)

Sonja wanted her very large ink works (several meters wide in real life) to be explorable on-line.
In order to implement this, I utilized deep zoom images with the OpenSeadragon platform and [VIPS](https://www.libvips.org/). 
The implementation of OpenSeadragon in NextJS is rather unique, using dynamically rendered components and wrapping the object in a useEffect() hook.
