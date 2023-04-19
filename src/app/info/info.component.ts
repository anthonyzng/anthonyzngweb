import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  self_img : string = "./assets/self.jpg"
  openUrl(url : string){
    window.open(url, '_blank');
  }
  sendEmail() {
    const email = 'anthonyzng075@gmail.com';
    const subject = 'Enter your thought to me :D (๑ↀᆺↀ๑)✧ tips:ctrl + a -> enter your thought';
    const body = 'I am looking forward for your email :D,please let me know your thought <----please edit me ₍₍ ◝(●˙꒳˙●)◜ ₎₎';
    const mailtoUri = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUri;
  }
}
