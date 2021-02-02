import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react'

export const siteTitle = "三两首页";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="home">
        <div className="carousel">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            >
            <SwiperSlide>swiper 1</SwiperSlide>
            <SwiperSlide>swiper 2</SwiperSlide>
            <SwiperSlide>swiper 3</SwiperSlide>
            <SwiperSlide>swiper 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
