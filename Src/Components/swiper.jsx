import { Swiper, SwiperSlide } from 'swiper/react';


// icon
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

// Import Swiper styles
import 'swiper/css/bundle';
import './swiperStyle.css';



// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperContent() {
  return (
    <>
      <div className='swiperContent'>
        {/* <h1 className='text-center mb-5 pb-5'>OUR REVIEW TABLE</h1> */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-card">
            <img src="../img/cus1.jpeg" alt="customer 1" />
            <div className='card-text'>
              <h3 className='hed3 text-danger text-center text-truncate mt-2'>Tesa</h3>
              <p className='px-3 text-truncate'><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarHalf color="orange" /><BsStar color="orange" /></p>
              <p className='text-warning px-2'>Hi, here we get easily job for best price...</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card">
            <img src="../img/cus2.jpeg" alt="customer 2" />
            <div className="card-text">
              <h3 className='hed3 text-danger text-center text-truncate mt-2'>Mike</h3>
              <p className='px-3 text-truncate'><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStar color="orange" /><BsStar color="orange" /></p>
              <p className='text-warning px-2'>Hello, Im getting lots of project here...</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card">
            <img src="../img/cus3.jpeg" alt="customer 3" />
            <div className="card-text">
              <h3 className='hed3 text-danger text-center text-truncate mt-2'>josheph</h3>
              <p className='px-3 text-truncate'><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarHalf color="orange" /><BsStarHalf color="orange" /><BsStar color="orange" /></p>
              <p className='text-warning px-2'>Hi, Im josheph It was a great experience..</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card">
            <img src="../img/cus4.jpeg" alt="customer 4" />
            <div className="card-text">
              <h3 className='hed3 text-danger text-center text-truncate mt-2'>Gill</h3>
              <p className='px-3 text-truncate'><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarHalf color="orange" /><BsStar color="orange" /></p>
              <p className='text-warning px-2'>In this platform I have gain lots of experience</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card">
            <img src="../img/cus2.jpeg" alt="customer 5" />
            <div className="card-text">
              <h3 className='hed3 text-danger text-center text-truncate mt-2'>Tyson</h3>
              <p className='px-3 text-truncate'><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStar color="orange" /></p>
              <p className='text-warning px-2'>Hello, Im getting lots of project here...</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card">
            <img src="../img/cus3.jpeg" alt="customer 6" />
            <div className="card-text">
              <h3 className='hed3 text-danger text-center text-truncate mt-2'>Kevin</h3>
              <p className='px-3 text-truncate'><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarFill color="orange" /><BsStarHalf color="orange" /><BsStar color="orange" /></p>
              <p className='text-warning px-2'>Hi, Im Kevin It was a great experience..</p>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
      </div>

    </>
  );
}
