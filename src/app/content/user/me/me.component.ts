import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/auth/auth.component';
import { HttpService } from 'src/app/service/http.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PasswordComponent } from 'src/app/dialog/password/password.component';




@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit{
  formControl:any;
  infoUser:any
  hide = true;
  matcher = new MyErrorStateMatcher()
  
  constructor(
    private fb: FormBuilder,  
    private http: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.http.getMe().subscribe((res:any) => {
      this.infoUser = res.data.data
      this.formControl = this.fb.group({
        name: [this.infoUser.name, Validators.required],
        email: [this.infoUser.email, Validators.email,],
      })
      this.formControl.get('email').disable();
    })
    
  }
  openDialog() {
    this.dialog.open(PasswordComponent, {
        height: '400px',
        width: '600px'
  })}
  


  onSubmit() {
    this.http.updatePassword(this.formControl.value).subscribe(data => {
      console.log(data)
    })
  }
}


