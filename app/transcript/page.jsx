"use client";
import React, { useState } from "react";
import MyTranscript from "../../public/images/jatuwitTranscript.png";
import SingleImageSlideContainer from "@/components/image_slide_container/SingleImageSlideContainer";

function Transcript() {
  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const onCloseZoomImageTranscript = () => {
    setIsOpenSlide(false);
  };

  const onOpenZoomImageTranscript = () => {
    setIsOpenSlide(true);
  };

  return (
    <SingleImageSlideContainer
      isOpen={isOpenSlide}
      onClose={onCloseZoomImageTranscript}
      onOpen={onOpenZoomImageTranscript}
      image={MyTranscript}
      titleImg={"nutjp transcript image"}
    />
  );
}

export default Transcript;
