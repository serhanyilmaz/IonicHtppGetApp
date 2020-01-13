import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { resolve } from 'dns';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public http: HttpClient,public loadingController: LoadingController) {
    this.getUsersList()
  }
  usersList:object
  async getUsersList()
  {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    
return new Promise( resolve=> {
//http://localhost:55371/api/user
  this.http.get('http://localhost:80/app/firstApp.php').subscribe(data =>{
    resolve(data);
    console.log(data)
    loading.dismiss()
    this.usersList=data
},err =>{
  console.log(err);
});

});


  }


}
