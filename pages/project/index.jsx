import React, { useState } from "react";
import "../../app/globals.css";

import image1 from "../../public/images/gallery_1.png";
import image2 from "../../public/images/r_image_1.png";
import image3 from "../../public/images/r_image_2.png";
import GallerySlide from "@/components/image_slide/GallerySlide";
import Image from "next/image";
import FloatBackButton from "@/components/button/FloatBackButton";

function Project() {
  let [openUserHotel, setOpenUserHotel] = useState(false);
  const images = [image1, image2, image3];

  const onCloseUserHotelHandler = () => {
    setOpenUserHotel(false);
  };

  return (
    <div className="project-container">
      <FloatBackButton/>
      <div className="user-hotel-wrapper">
        <div className="user-hotel-wrapper__content">
          <h1 className="text-2xl font-bold border-b-2 border-blue-300 mb-2">Hotel Management</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa hic eligendi sit, officia doloribus minus fugit nemo recusandae provident.</h3>
          <button
            className="bg-blue-500 text-white font-bold w-52 h-10"
            onClick={() => setOpenUserHotel(true)}
          >
            แสดงรูป
          </button>
        </div>
        <div className="user-hotel-wrapper__gallery">
          <Image
            src={image1}
            alt="user hotel"
            style={{ width: "100%", height: "100%" }}
            className="object-contain"
          />
          <GallerySlide
            images={images}
            isOpen={openUserHotel}
            onClose={onCloseUserHotelHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
