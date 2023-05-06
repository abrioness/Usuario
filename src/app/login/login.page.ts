import { Component, OnInit } from '@angular/core';

import { UsrService } from '../api/usr.service';
import { Console } from 'console';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  Usuario:any;
  login=
  {
    id:0,
   user:"",
   pass:""

  };  
  


  constructor(public service: UsrService,public navCtrl: NavController) { }

  ngOnInit() {
  } 

  getData()
  {
    
    this.service.getPosts(this.login.user,this.login.pass).then(data=>{
    this.Usuario=data;
    
    if (this.Usuario.response>0) {  
      
     this.irPagina();
    }
    else{
     alert("Verifique su usuario o contraseña");
    }
    
    });
    
  }
  irPagina() {
    this.navCtrl.navigateRoot("dato-usuario");
  }

}
