import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';



const ProductSlider = () => {

    return (
        <div className="container py-4 px-4 justify-content-center bg-light">
            <Swiper
            freeMode = {true}
            grabCursor = {true}
            modules = {[FreeMode]}
            className="mySwiper"
            slidesPerView = {5}
            spacesBetweeb = {30}
            
            >
                <SwiperSlide>
                    <h1>Hello</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}