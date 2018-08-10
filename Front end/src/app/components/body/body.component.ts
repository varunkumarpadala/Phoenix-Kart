import { Router } from '@angular/router';
import { PhoenixService } from './../../shared/phoenix.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  arrays=[];
  constructor(private phoenixService:PhoenixService,private router:Router) { }
  images=['../../assets/pics/Apple.jpg','../../assets/pics/acer.png','../../assets/pics/hp.png','../../assets/pics/iball.jpg','../../assets/pics/dell.jpg','../../assets/pics/lenovo.jpg','../../assets/pics/samsung.jpg','../../assets/pics/sony.jpg'];

  ngOnInit() {
    this.displayProducts();
    console.log('Designed & Developed By:\nVarun\nKomali\nVamsi\nNidesh\nThanmayi\nSreepadh\nAshish\nParimala\nRajesh\nKrishna\nAnusha\nYamuna\nPriya\nVaishnavi\nGayatri\nYamuna\nAnjana');
  }

  displayProducts(){
    this.phoenixService.getProducts().subscribe(data=>{
      console.log(data['msg']);
      this.arrays=data['msg'];
    });
  }
  addpo(data){
    this.phoenixService.setter(data);
    this.router.navigate(['/addpo']);
  }
}
