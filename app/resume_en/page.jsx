"use client";
import React, { useState } from "react";
import MyResume from "../../public/images/resume_jatuwit_20241104_eng.png";
import SingleImageSlideContainer from "@/components/image_slide_container/SingleImageSlideContainer";

function ResumeEng() {
  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const onCloseZoomImageResumeEng = () => {
    setIsOpenSlide(false);
  };

  const onOpenZoomImageResumeEng = () => {
    setIsOpenSlide(true);
  };

  return (
    <SingleImageSlideContainer
      isOpen={isOpenSlide}
      onClose={onCloseZoomImageResumeEng}
      onOpen={onOpenZoomImageResumeEng}
      image={MyResume}
      titleImg={"nutjp resume thai image"}
    />
  );
}

export default ResumeEng;
