import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { routerdata  } from './interface/Routedata'
import { animation } from './loginform.animation'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
  animations :[ animation ]

})
export class LoginformComponent implements OnInit {

  user = {
    mail : 'hoge@hehehe.com',
    passwd:''
  }

  pagedata = {
    page:String,
    
  }

  show = false;


  constructor( private _route: ActivatedRoute ) {  }

  ngOnInit() {
    this._route.data.subscribe(
      obj => {
          this.pagedata.page =  obj.page
      }
    )
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
    console.log(this.show)
  }


post(){
  console.log('メールアドレス :' + this.user.mail)
  console.log('パスワード :' + this.user.passwd)
}    

}
