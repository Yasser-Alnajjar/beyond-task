import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";

export default function Carousel({ activeIndex, setActiveIndex, children }) {
  const swiperRef = useRef(null);

  if (swiperRef.current && swiperRef.current.swiper) {
    const swiperInstance = swiperRef.current.swiper;
    // Access pagination bullets
    const bullets = swiperInstance.pagination.bullets;
    bullets[activeIndex].click();
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: "100%",
      }}
      whileInView={{
        opacity: 1,
        translateX: "0%",
      }}
    >
      <Swiper
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        ref={swiperRef}
        spaceBetween={30}
        effect={"fade"}
        grabCursor={true}
        modules={[Pagination]}
        className="swiper"
      >
        {children}
      </Swiper>
    </motion.div>
  );
}
