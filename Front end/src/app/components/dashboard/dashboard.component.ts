import { Observable } from 'rxjs';


import { Router } from '@angular/router';
import { PhoenixService } from './../../shared/phoenix.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private phoenixservice:PhoenixService,private router:Router) { }
  arrays=[];
  arrays2=[];
  memorySize=0;
  operatingSystem=0;
  hddSize=0;
  price=0;
  averageCustomerReview=0;
  temp;
  ngOnInit() {

    this.displayProducts();
    console.log('Designed & Developed By:\nVarun\nKomali\nVamsi\nNidesh\nThanmayi\nSreepadh\nAshish\nParimala\nRajesh\nKrishna\nAnusha\nYamuna\nPriya\nVaishnavi\nGayatri\nYamuna\nAnjana');
  }

  displayProducts(){
    this.phoenixservice.getProducts().subscribe(data=>{
      console.log(data['msg']);
      this.arrays=data['msg'];
    });
  }
  addpo(data){
    this.phoenixservice.setter(data);
    this.router.navigate(['/addpo']);
  }

  ms(size:number){
    console.log(size);
    this.phoenixservice.getMemoryFilter(size).subscribe(data=>{
      this.phoenixservice.setarray(data['msg']);
      console.log(data['msg']);
      this.arrays=data['msg'];
    });
  }

  sortBy(state){
    if(state=='lh')
    {
      console.log('low to high price');
      this.arrays2=this.arrays;
      for(let i=1;i<this.arrays2.length;i++){
        for(let j=i;j>0;j--){
          if(this.arrays2[j].Pprice<this.arrays2[j-1].Pprice){
            this.temp=this.arrays2[j];
            this.arrays2[j]=this.arrays2[j-1];
            this.arrays2[j-1]=this.temp;
          }
        }
      }
      console.log(this.arrays2);
      this.arrays=this.arrays2;
    }
    else if(state=='hl')
    {
      console.log('high to low price');
      this.arrays2=this.arrays;
      for(let i=1;i<this.arrays2.length;i++){
        for(let j=i;j>0;j--){
          if(this.arrays2[j].Pprice>this.arrays2[j-1].Pprice){
            this.temp=this.arrays2[j];
            this.arrays2[j]=this.arrays2[j-1];
            this.arrays2[j-1]=this.temp;
          }
        }
      }
      console.log(this.arrays2);
      this.arrays=this.arrays2;
    }
    else{
      console.log('low to high price');
      this.arrays2=this.arrays;
      for(let i=1;i<this.arrays2.length;i++){
        for(let j=i;j>0;j--){
          if(this.arrays2[j].Prating<this.arrays2[j-1].Prating){
            this.temp=this.arrays2[j];
            this.arrays2[j]=this.arrays2[j-1];
            this.arrays2[j-1]=this.temp;
          }
        }
      }
      console.log(this.arrays2);
      this.arrays=this.arrays2;
    }
  }
}

