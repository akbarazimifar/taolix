import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import Banner from "./Banner";

const HeroSwiper = ({ top5 }) => {
  // console.log(top5);
  return (
    <Swiper
      // install Swiper modules
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectCoverflow,
      ]}
      autoplay={{
        delay: 8000,
        disableOnInteraction: true,
      }}
      effect="coverflow"
      loop
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log()}
      onSlideChange={() => console.log("slide change")}
    >
      {top5.map((movie) => (
        <SwiperSlide key={movie.vod_id}>
          <Banner
            detail={{
              vod_pic: movie.vod_pic,
              vod_name: movie.vod_name,
              vod_blurb: movie.vod_blurb,
              vod_director: movie.vod_director,
              vod_actor: movie.vod_actor,
              vod_class: movie.vod_class,
              vod_play_url: movie.vod_play_url,
              vod_id: movie.vod_id,
              mode: "homePage",
            }}
          />
        </SwiperSlide>
      ))}
      <style global jsx>{`
        .swiper-pagination-bullet {
          background-color: white;
          padding: 0.4rem;
        }
        .swiper-button-next {
          transform: translate(0.65rem, -41%);
          height: 100%;
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(30, 30, 30, 0.9)
          );
        }
        .swiper-button-prev {
          transform: translate(-0.65rem, -40%);
          height: 100%;
          background-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 0),
            rgba(10, 10, 10, 0.9)
          );
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #999;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
        }
        .swiper-button-next.swiper-button-disabled,
        .swiper-button-prev.swiper-button-disabled {
          opacity: 0.2;
        }
      `}</style>
    </Swiper>
  );
};

export default HeroSwiper;