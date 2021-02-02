import { Swiper, SwiperSlide} from 'swiper/react'

export default function Home() {
  return (
    <div className="home">
      <div className="carousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <div className="background">
        品牌背景
      </div>
    </div>
  )
}