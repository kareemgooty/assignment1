import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function ratingRange(min: Number, max: Number) {


    //function (c:AbstractControl): {rating: true} 
    //explaination function whcih takes abstract control as argument and return key value pair {rating: boolean}
    return (c: AbstractControl): {[key: string]: boolean} | null => {
   if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
     return {'range': true};
   }
   return null;
 };
}


function emailMatcher(c: AbstractControl) {
    const emailControl = c.get('email');
    const confirmControl = c.get('confirmEmail');
    console.log(emailControl.value);
    console.log(confirmControl.value);
    if (emailControl.pristine || confirmControl.pristine) {
        console.log("if (emailControl.pristine || confirmControl.pristine) ")
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        console.log("if (emailControl.value === confirmControl.value) ")
        return null;
    }
    return {'match': true};
  }
  


@Component(
    {
    selector : 'app-employee',
    templateUrl : './employee.component.html'
    }
)

export class EmployeeComponent implements OnInit {

    constructor(private _fb: FormBuilder){}
    empFormGroup : FormGroup;
    ngOnInit(): void {
          this.empFormGroup =  this._fb.group({
                 firstName: ['',  [Validators.required,Validators.minLength(3)] ],
                 lastName: ['',  [Validators.required,Validators.maxLength(5)] ],
                 phone: [''],
                 emailGroup: this._fb.group({
                    email:    ['',     [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
                    confirmEmail: ['', Validators.required],
                }, {validator: emailMatcher}),
                 notification: '',
                 rating: ['', [ratingRange(1, 5)]]
            });
    }

    
  setNotification(notifyVia: string): void {
    const phoneControl = this.empFormGroup.get('phone');
      if (notifyVia === 'phone') {
          phoneControl.setValidators(Validators.required);
      } else {
        phoneControl.clearValidators();
      }

      phoneControl.updateValueAndValidity();

  }

  junitTesting(id):boolean{
    if(id === 1){
        return true;
    }else{
        return false;
    }
  }

}