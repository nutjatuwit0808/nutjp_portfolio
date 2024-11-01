import React from "react";
import styles from "./SingleImageSlideContainer.module.css";
import GallerySingleSlide from "../image_slide/GallerySingleSlide";
import Image from "next/image";

function SingleImageSlideContainer({
  isOpen,
  onClose,
  onOpen,
  image,
  titleImg,
}) {
  return (
    <div className={styles.singleImgContainer}>
      <div className={styles.singleImgWrapper} onClick={onOpen}>
        <div className={styles.textShowClickToZoom}>Click to zoom</div>
        <GallerySingleSlide
          images={[image]}
          isOpen={isOpen}
          onClose={onClose}
        />
        <Image src={image} alt={titleImg}></Image>
      </div>
    </div>
  );
}

export default SingleImageSlideContainer;
