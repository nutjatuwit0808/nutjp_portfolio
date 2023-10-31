import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function GallerySlide(props) {
    const images = props.images//[image1, image2, image3];
  
    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  
    function nextImageUrl(src, size) {
      return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }
  
    const slides = images.map(({ src, width, height }) => ({
      width,
      height,
      src: nextImageUrl(src, width),
      srcSet: imageSizes
        .concat(...deviceSizes)
        .filter((size) => size <= width)
        .map((size) => ({
          src: nextImageUrl(src, size),
          width: size,
          height: Math.round((height / width) * size),
        })),
    }));
  return (
    <Lightbox
      open={props.isOpen}
      close={props.onClose}
      slides={slides}
      plugins={[Zoom]}
    />
  )
}

export default GallerySlide