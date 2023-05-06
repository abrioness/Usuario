import { Component, OnInit } from '@angular/core';
import { UsrService } from '../api/usr.service';

@Component({
  selector: 'app-dato-usuario',
  templateUrl: './dato-usuario.page.html',
  styleUrls: ['./dato-usuario.page.scss'],
})
export class DatoUsuarioPage implements OnInit {
Usuario:any;
  data=
  {
    idUser: 0,
    pnom: "",
    snom: "",
    pape: "",
    sape: "",
    nusu: "",
    ntel: "",
    email: "",
    pass: ""

  };

  constructor(public service:UsrService) { }

  ngOnInit() {
  }


 async Registrar()
  {
    
    this.service.addPost(this.data);
    
  }

  async ValUsu(){
    this.service.GetPostsUser(this.data.pnom,this.data.pape,this.data.nusu).then(data=>{
      this.Usuario=data;
      
      if (this.Usuario.response>0) { 
               
       alert("El usuario ya existen");
       this.LimpiarCampos();
      }
      else{
       this.Registrar();
       this.LimpiarCampos();
      }
      
      });
  }


  LimpiarCampos()
  {
    this.data=
  {
    idUser:0,
    pnom: "",
    snom: "",
    pape: "",
    sape: "",
    nusu: "",
    ntel: "",
    email: "",
    pass: ""

  };
  }
}
