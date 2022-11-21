import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit{
  changePasswordFrom: any;
  hide = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder ,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.changePasswordFrom = this.fb.group({
      passwordCurrent: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    })
  }

  checkPasswords(): any  { 
    let pass = this.changePasswordFrom.get('password').value;
    let confirmPass = this.changePasswordFrom.get('passwordConfirm').value
    return pass === confirmPass ? null : { notSame: true }
  }

  
  onSubmit() {
    this.http.updatePassword(this.changePasswordFrom.value)
    .subscribe({
      next: (data => {
        console.log("thay doi mat khau thanh cong")
      }),
      error: err => {
        console.log("thay doi mat khau that bai")
        console.log(err)
      }
    })
  }
}

