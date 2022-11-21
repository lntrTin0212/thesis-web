import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide= true;
  formControl:any;
  constructor(
    private fb: FormBuilder,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.formControl = this.fb.group({
      email: ['', Validators.email],
      password: ['',Validators.required]
    })
  }
  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formControl.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {
    this.http.Signin(this.formControl.value).subscribe((data:any) => {
      if(data['token']) {
        localStorage.setItem('logginToken',data.token)
      }
    })
  }
}
