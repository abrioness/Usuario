import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.page.html',
  styleUrls: ['./recibo.page.scss'],
})
export class ReciboPage implements OnInit {
  swiperModules = [IonicSlides];
  check_os=false;
  check_ingre=false;

  constructor() { }

  ngOnInit() {
  }
  
}
