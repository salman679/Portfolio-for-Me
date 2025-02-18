"use client";

import { useRef } from "react";
import { projectsData } from "@/utils/data/projects-data";
import Project from "./Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const swiperRef = useRef(null); // Create a reference to Swiper instance

  // Function to handle navigation
  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute z-50 -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <Swiper
          ref={swiperRef} // Attach the ref to the Swiper instance
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="w-full h-full relative"
        >
          {projectsData.slice(0, 3).map((project) => (
            <SwiperSlide key={project.id} className="h-full">
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
