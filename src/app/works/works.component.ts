import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Pagination, Navigation, SwiperOptions} from 'swiper';
SwiperCore.use([Pagination, Navigation])

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WorksComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    mousewheel:true,
    navigation: {
    },
    pagination: {
        clickable: true,
    }
}
}
