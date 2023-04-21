import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Pagination, Navigation, SwiperOptions} from 'swiper';
SwiperCore.use([Pagination, Navigation])
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ProjectComponent {
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
