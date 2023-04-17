import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
