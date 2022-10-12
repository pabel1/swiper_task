import React from "react";

const Demo = () => {
  return (
    <div>
      <div id="change_it">Should be change it</div>
      <div class="container">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="col-md-6">
                <div class="well">Slide 1</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="col-md-6">
                <div class="col-md-12">
                  <div class="row">
                    <div class="well">Slide 1a</div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="well">Slide 1b</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="col-md-6">
                <div class="well">Slide 2</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="col-md-6">
                <div class="col-md-12">
                  <div class="row">
                    <div class="well">Slide 2a</div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="well">Slide 2b</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="col-md-6">
                <div class="well">Slide 3</div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="col-md-6">
                <div class="col-md-12">
                  <div class="row">
                    <div class="well">Slide 3a</div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="well">Slide 3b</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
