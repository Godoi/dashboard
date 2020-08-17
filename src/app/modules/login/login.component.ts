import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../../core/authentication/auth.service'
//import { AlertService } from 'src/app/core/services/alert.service'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public error = ''
  public loginForm: FormGroup

  private options = {
    autoClose: false,
    keepAfterRouteChange: false,
  }

  constructor(
    private authService: AuthService,
    //protected alertService: AlertService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.constructorForm()
  }

  ngOnInit(): void {
    console.log('Init')
  }

  constructorForm(): void {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  resetForm(): void {
    this.loginForm.reset({
      userName: [null],
      password: [null],
    })
  }

  onSubmit(): void {
    try {
      this.authService.login(this.loginForm.value)
    } catch (e) {
      this.resetForm()
      //this.alertService.clear()
      //this.alertService.error('Username and password not found. ', this.options)
      this.router.navigate(['login'])
    }
  }
}
