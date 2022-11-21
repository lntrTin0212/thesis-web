import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroupDirective, NgForm, ValidationErrors, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpService } from 'src/app/service/http.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  formControl:any;
  hide = true;
  matcher = new MyErrorStateMatcher()
  constructor(
    private fb: FormBuilder,
    private http: HttpService
  ) { }
  checkPasswords(): any  { 
    let pass = this.formControl.get('password').value;
    let confirmPass = this.formControl.get('passwordConfirm').value
    return pass === confirmPass ? null : { notSame: true }
  }
  ngOnInit(): void {
    this.formControl = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['',Validators.required]
    })
  }
  onSubmit() {
    console.log(this.formControl.value)
    console.log(this.checkPasswords())
    this.http.Signup(this.formControl.value).subscribe(data => {
      console.log(data)
    })
  }
}
