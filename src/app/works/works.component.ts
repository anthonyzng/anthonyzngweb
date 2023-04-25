import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Pagination, Navigation, SwiperOptions, Swiper,EffectFade } from 'swiper';
import * as $ from 'jquery';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Pagination, Navigation,EffectFade])

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WorksComponent {


  onSwiper(swiper : Swiper) {
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function() {
      swiper.slideTo($(this).index());
    });
    $(this).addClass("active");
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    mousewheel:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function (swiper) {
        swiper.slideTo(4)
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(4).addClass("active");
      },
      slideChangeTransitionStart: function (swiper) {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(swiper.activeIndex).addClass("active");
      }
    }
  }



}
