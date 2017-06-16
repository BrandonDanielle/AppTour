import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //LOG IN
  private data: FormGroup;
  private formexdata: FormGroup;
  //Formulario nuevo
  info: any;
  records: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public AlertCtrl:AlertController, public FormBuilder: FormBuilder,
  public modalCtrl: ModalController, db: AngularFireDatabase) {


    this.data=this.FormBuilder.group({
      username:['',Validators.required],
      password:['', Validators.required]
    })

    //tabla
    this.records=db.list('/usuarios');
    this.formexdata=this.FormBuilder.group
    ({
      name:['',Validators.required],
      gender: ['', Validators.required],
      hobby: ['',Validators.required]
    })
  }

  swipe: number=0;
  tap: number=0;



login() {
    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
      .then((response) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user.emailVerified) {
            user.sendEmailVerification();
          }
        })
        console.log(response)
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

guardarForm()
{
  if(this.formexdata.valid){
    this.records.push(this.formexdata.value)
  }
  else{
    console.error('Verifique su información')
  }
}

//Métodos
  HolaMundo()
  {
    let alert = this.AlertCtrl.create({
      title: 'Mi primer Alert',
      subTitle: 'Este es un Subtitle',
      buttons: ['Ok']
    })
    alert.present();
    console.log('Funciona!');
  }

  myFunction(event){
    this.swipe++
  }

  tapFunction(event){
    this.tap++
  }

  ionViewidLoad(){
    console.log(this.records)
  }

}
//Asi se comenta en TS