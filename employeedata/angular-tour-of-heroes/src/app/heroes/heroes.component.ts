import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
employees=[];

model: any ={};
model2: any ={};
addEmployees(){
  this.employees.push(this.model);
  this.model = {};
  console.log("Sbuda");
}
deleteEmployees(i){
  this.employees.splice(i,1);
}
val;
EditEmployees(k)
{ 
  console.log(k);
this.model2.name = this.employees[k].name;
this.model2.Address = this.employees[k].Address;
this.model2.Province = this.employees[k].Province;
this.model2.Position = this.employees[k].Position;
this.model2.Cellphone = this.employees[k].Cellphone;
this.model2.Email = this.employees[k].Email;
this.model2.BankAccount = this.employees[k].BankAccount;
this.model2.TaxNumber = this.employees[k].TaxNumber;
this.val = k;


}
Update()
{
  let z = this .val;
  for(let o = 0;o<this.employees.length;o++)

{
  this.employees[o] = this.model2;
}
}
  constructor() { }

  ngOnInit() {
  }

}
