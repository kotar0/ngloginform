import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public user = {
        mail : 'hoge@hehehe.com',
        passwd:''
    }

    show(){
        console.log('メールアドレス :' + this.user.mail)
        console.log('パスワード :' + this.user.passwd)
    }
}
