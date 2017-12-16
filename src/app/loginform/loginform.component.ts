import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  public user = {
    mail : 'hoge@hehehe.com',
    passwd:''
  }

  constructor() {  }

  ngOnInit() {
  }

show(){
  console.log('メールアドレス :' + this.user.mail)
  console.log('パスワード :' + this.user.passwd)
}    

}
