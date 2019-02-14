import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICustomer } from './ICustomer';
import { CustomerProvider } from './customerform.service';

@Component(
    {
        selector: 'app-customer-from',
        templateUrl: './customerForm.component.html'
    }
)
export class CustomerFormComponent {
  model = new ICustomer('John','Smith','kkg@gmaiil.com','password',true,"","");
  languages: any[]=["java","angular","express"];
  codeLangError: boolean = true;

  constructor(private provider: CustomerProvider){

  }
  validateCodeLang($event){
    if(this.model.codelang === 'default'){
        console.log(this.codeLangError)
        this.codeLangError = true;
    }else{
        this.codeLangError = false;
        console.log(this.codeLangError)
    }
  }

  formSubmit(form: NgForm){
    this.provider.saveCustomer(form.value).subscribe(
            (data) => console.log("Data saved sucessfully")
    );
    } 
}