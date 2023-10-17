import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  self_img : string = "/src/assets/self.jpg"
  //skills list
  skill_name: string[] = ["HTML5","CSS","JavaScript","AngularCLI","Node.js","Java","Kotlin","TypeScript","Python","Docker","Kubernetes","Azure","Git","Jira","Jenkins","SQL"];
  skill_icon : string[] = ["./assets/html5.png","./assets/css3.png","./assets/javascript.png","./assets/angularcli.png","./assets/nodejs.png",
  "./assets/java.png","./assets/kotlin.png","./assets/typescript.png","./assets/python.png","./assets/docker.png","./assets/k8s.png","./assets/azure.png","./assets/git.png"
  ,"./assets/jira.png","./assets/jenkins.png","./assets/sql.png"];
  //end of skills list
  //contact_list
  contact_name : string[] = ["My LinkedIn","My Blog","My Github","My LeetCode"];
  contact_icon : string[] = ["./assets/linkedin.png","./assets/blog.png","./assets/github.png","./assets/leetcode.png"];
  contact_links : string[] = ["https://www.linkedin.com/in/anthonyzng","https://tungzgg.wordpress.com/","https://github.com/anthonyzng","https://leetcode.com/anthonyzng075/"]
  //end of contact_list
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
