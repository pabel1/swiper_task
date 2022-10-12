import "./App.css";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import "swiper/css/navigation";
import { useState } from "react";

function App() {
 
 
  
  const [slideData] = useState([
    "Slice 1",
    
    "Slice 2",
   
    "Slice 3",
    "Slice 4",
    "Slice 5",
   
 
  ]);
  const [swiperIndex, setSwiperIndex] = useState(slideData[0]);
  return (
    <div className="container">
      <div>
        <h1> Slider  {swiperIndex} is running... </h1>
      </div>
      <div className="swiper-container">
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          slidesPerGroup={2}
          
          // slidesPerColumn={1}
          navigation
          onActiveIndexChange={index => setSwiperIndex(slideData[index.snapIndex])}

          onSlideChange={() =>console.log("change slice")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slideData && slideData.map((item, index) => {
            return (
              <div  key={index} >
                <SwiperSlide key={index+1} style={{height:"300px"}}>
                  <div className="swiper-slide">
                    <div className="col-md-6">
                      <div className="well">{item}</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={item} style={{height:"300px"}}>
                  <div className="swiper-slide">
                    <div className="col-md-6">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="well">{item}a</div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="well">{item}b</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}

         
        </Swiper>
    
      </div>
    </div>
  );
}

export default App;
