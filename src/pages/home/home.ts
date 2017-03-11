//Becerra Casillas Efraín Alejandro
//Rodríguez Hernández José Antonio
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  c1 : number;
  c2 : number;
  c3 : string;
  op: String;

  constructor(public navCtrl: NavController) {
    this.c1=this.c2=0;
    this.c3 = "";
    this.op="op"
    
  }

  suma(){
    this.op="+";
    this.c3 = String(Number(this.c1) + Number(this.c2));
    if(this.c3=="NaN")
      this.c3 = "Error en los valores introducidos"
  }

  resta(){
    this.op="-";
    this.c3 = String(Number(this.c1) - Number(this.c2));
    if(this.c3=="NaN")
      this.c3 = "Error en los valores introducidos"
  }

  multiplicacion(){
    this.op="*";
    this.c3 = String(Number(this.c1) * Number(this.c2));
    if(this.c3=="NaN")
      this.c3 = "Error en los valores introducidos"
  }

  division(){
    this.op="/";
    this.c3 = String(Number(this.c1) / Number(this.c2));
    if(this.c3=="NaN")
      this.c3 = "Error en los valores introducidos"
  }

  modulo(){
    this.op="%";
    this.c3 = String(Number(this.c1) %  Number(this.c2));
    if(this.c3=="NaN")
      this.c3 = "Error en los valores introducidos"
  }

}
