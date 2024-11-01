"use client"
import React, { useState } from "react";
import MyResume from "../../public/images/nutjatuwit_resume_th_2024_page-0001.jpg";
import SingleImageSlideContainer from "@/components/image_slide_container/SingleImageSlideContainer";

function ResumeTh() {
  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const onCloseZoomImageResumeTh = () => {
    setIsOpenSlide(false);
  };

  const onOpenZoomImageResumeTh = () => {
    setIsOpenSlide(true);
  };

  return (
    <SingleImageSlideContainer
      isOpen={isOpenSlide}
      onClose={onCloseZoomImageResumeTh}
      onOpen={onOpenZoomImageResumeTh}
      image={MyResume}
      titleImg={"nutjp resume eng image"}
    />
  );
}

export default ResumeTh;
