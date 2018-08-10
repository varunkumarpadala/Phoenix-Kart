import { Excess } from './../excess';
import { Excess2 } from './../excess2';
import { HeaderComponent } from './../components/header/header.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PhoenixService {

  private array;

  form: NgForm;
  status;
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private excess: Excess;
  private excess2: Excess2;
  constructor(private http: HttpClient) { }

  //Get products to display in home page
  getProducts() {
    return this.http.get(this.baseUri + '/getProducts', { headers: this.headers });
  }
  
  //signup page
  // createUser(form: NgForm) {
  //   return this.http.post(this.baseUri + '/createUser', form.value, { headers: this.headers });
  // }

  //Validate admin login
  getUsers(form:NgForm) {
    return this.http.post(this.baseUri + '/getLogin', form.value, { headers: this.headers });
  }

  //Display all orders in admin dashboard
  getOrders(){
    return this.http.get(this.baseUri+'/getOrders',{headers:this.headers});
  }

  getcompletedOrders(){
    return this.http.get(this.baseUri+'/getcompletedOrders',{headers:this.headers});
  }

  getopenOrders(){
    return this.http.get(this.baseUri+'/getopenOrders',{headers:this.headers});
  }

  //Store the new order details
  createOrder(h) {
    return this.http.post(this.baseUri + '/createOrder',h, { headers: this.headers });
  }

  //update status of an order
  updateOrder(cs,id){
    console.log(cs+" "+id);
    return this.http.put(this.baseUri+'/updateOrder',{'Pstatus':cs,'id':id},{headers:this.headers});
  }

  getMemoryFilter(size:number){
    return this.http.post(this.baseUri+'/memoryFilter',{'Pram':size},{headers:this.headers});
  }

  
  setter(excess: Excess) {
    this.excess = excess;
  }

  getter() {
    return this.excess;
  }
  setForm(excess2: Excess2) {
    this.excess2 = excess2;
  }
  getForm() {
    return this.excess2;
  }
  setstatus(status){
    this.status=status;
  }
  getstatus(){
    return this.status;
  }

  setarray(array){
    console.log(array);
    console.log('hiiii');
    this.array=array;
  }
  getarray(){
    return this.array;
  }
  
}
