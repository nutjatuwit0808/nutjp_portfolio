import React, { useState } from "react";
import "../../app/globals.css";
import "./project.css";

import GallerySlide from "@/components/image_slide/GallerySlide";
import Image from "next/image";
import FloatBackButton from "@/components/button/FloatBackButton";

/*USER SIDE*/
import user_img1 from "../../public/images/projects/hotel_management/user1.png";
import user_img2 from "../../public/images/projects/hotel_management/user2.png";
import user_img3 from "../../public/images/projects/hotel_management/user3.png";
import user_img4 from "../../public/images/projects/hotel_management/user4.png";
import user_img5 from "../../public/images/projects/hotel_management/user5.png";
import user_img6 from "../../public/images/projects/hotel_management/user6.png";
/*ADMIN SIDE*/
import admin_img1 from "../../public/images/projects/hotel_management/admin1.png";
import admin_img2 from "../../public/images/projects/hotel_management/admin2.png";
import admin_img3 from "../../public/images/projects/hotel_management/admin3.png";
import admin_img4 from "../../public/images/projects/hotel_management/admin4.png";
import admin_img5 from "../../public/images/projects/hotel_management/admin5.png";

function Project() {
  let [openUserHotel, setOpenUserHotel] = useState(false);
  let [openAdminHotel, setOpenAdminHotel] = useState(false);

  const userHotelImages = [
    user_img1,
    user_img2,
    user_img3,
    user_img4,
    user_img5,
    user_img6,
  ];
  const adminHotelImages = [
    admin_img1,
    admin_img5,
    admin_img2,
    admin_img3,
    admin_img4,
  ];

  const onCloseUserHotelHandler = () => {
    setOpenUserHotel(false);
  };

  const onCloseAdminHotelHandler = () => {
    setOpenAdminHotel(false);
  };

  return (
    <div className="project-container">
      <FloatBackButton />
      <div className="project-detail-item-wrapper">
        <div className="project-title text-3xl font-bold  underline decoration-sky-500">
          <h1>Hotel Management</h1>
        </div>
        {/* First Item */}
        <div className="project-detail-wrapper">
          <div className="project-detail-wrapper__content">
            <h1 className="text-2xl font-bold border-b-2 border-blue-300 mb-2">
              User Side
            </h1>
            <div className="tag-wrapper mb-2">
              <span className="tag-blue">Amplify</span>
              <span className="tag-red">Lampda</span>
              <span className="tag-dark">Bootstrap</span>
              <span className="tag-green">Nodejs</span>
              <span className="tag-indigo">Reactjs</span>
            </div>
            <ul className="list-disc list-inside pl-8">
              <li>
                Room booking function and check availability during the desired
                time period.
              </li>
              <li>Various information about the hotel.</li>
              <li>Gallery for displaying pictures of the hotel.</li>
              <li>Web responsive.</li>
              <li>Send payment confirmation file via email to user.</li>
              <li>
                Development with{" "}
                <a className="underline decoration-sky-500">Reactjs</a>.
              </li>
              <li>
                Use <a className="underline decoration-sky-500">bootstrap</a> as
                css framework.
              </li>
              <li>
                Deploy on{" "}
                <a className="underline decoration-sky-500">AWS Amplify</a>.
              </li>
              <li>
                Backend is{" "}
                <a className="underline decoration-sky-500">Nodejs</a>,{" "}
                <a className="underline decoration-sky-500">Nodejs</a> deployed
                on <a className="underline decoration-sky-500">AWS Lampda</a>.
              </li>
            </ul>
          </div>
          <div className="project-detail-wrapper__gallery relative z-10 cursor-pointer max-w-xl">
            <div
              className="preview-images flex justify-center items-center"
              onClick={() => setOpenUserHotel(true)}
            >
              <button className="text-white border-2 border-white rounded-lg p-2">
                Preview
              </button>
            </div>
            <Image
              src={user_img1}
              alt="user hotel"
              style={{ width: "100%", height: "100%" }}
              className="object-cover"
            />

            <GallerySlide
              images={userHotelImages}
              isOpen={openUserHotel}
              onClose={onCloseUserHotelHandler}
            />
          </div>
        </div>
        {/* First Item */}
        {/* Second Item */}
        <div className="project-detail-wrapper">
          <div className="project-detail-wrapper__content">
            <h1 className="text-2xl font-bold border-b-2 border-blue-300 mb-2">
              Admin Side
            </h1>
            <div className="tag-wrapper mb-2">
              <span className="tag-blue">Amplify</span>
              <span className="tag-red">Lampda</span>
              <span className="tag-purple">S3</span>
              <span className="tag-dark">ReactMUI</span>
              <span className="tag-green">Nodejs</span>
              <span className="tag-indigo">Reactjs</span>
            </div>
            <ul className="list-disc list-inside pl-8">
              <li>
                There is a room timeline function for Admin to change
                reservations. Admin can close that room if you need cleaning or
                maintenance.
              </li>
              <li>
                Payment approval function, if the item has a slip uploaded from
                the user side. Admin can check the correctness and approve it.
              </li>
              <li>
                Generate payment URL function for gererate the url to select a
                room for the user. When the user opens the url, it will be the
                payment screen.
              </li>
              <li>Admin&apos;s role management function.</li>
              <li>Generate voucher function to use as a discount for users</li>
              <li>Function to change prices and room information.</li>
              <li>
                Holiday calendar management function You can set holidays for
                the system. And adjust the cost of bookings separated by room
                type.
              </li>
              <li>
                Gallery management function on the user side by uploading images
                to be stored in{" "}
                <a className="underline decoration-sky-500">AWS S3</a>.
              </li>
              <li>
                Development with{" "}
                <a className="underline decoration-sky-500">Reactjs</a>.
              </li>
              <li>
                Use <a className="underline decoration-sky-500">React MUI</a> as
                css framework.
              </li>
              <li>
                Deploy on{" "}
                <a className="underline decoration-sky-500">AWS Amplify</a>.
              </li>
              <li>
                Backend is{" "}
                <a className="underline decoration-sky-500">Nodejs</a>,{" "}
                <a className="underline decoration-sky-500">Nodejs</a> deployed
                on <a className="underline decoration-sky-500">AWS Lampda</a>.
              </li>
            </ul>
          </div>
          <div className="project-detail-wrapper__gallery relative z-10 cursor-pointer max-w-xl">
            <div
              className="preview-images flex justify-center items-center"
              onClick={() => setOpenAdminHotel(true)}
            >
              <button className="text-white border-2 border-white rounded-lg p-2">
                Preview
              </button>
            </div>
            <Image
              src={admin_img1}
              alt="user hotel"
              style={{ width: "100%", height: "100%" }}
              className="object-cover"
            />

            <GallerySlide
              images={adminHotelImages}
              isOpen={openAdminHotel}
              onClose={onCloseAdminHotelHandler}
            />
          </div>
        </div>
        {/* Second Item */}
      </div>
    </div>
  );
}

export default Project;
