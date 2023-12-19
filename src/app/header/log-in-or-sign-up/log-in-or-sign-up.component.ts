import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServicesService } from 'src/app/services/http-services.service';

declare var $: any;
@Component({
  selector: 'app-log-in-or-sign-up',
  templateUrl: './log-in-or-sign-up.component.html',
  styleUrls: ['./log-in-or-sign-up.component.css']
})
export class LogInOrSignUpComponent implements OnInit {
  @Output() info = new EventEmitter();


  signUpModal: boolean = true;
  loginModal: boolean = false;
  logInWithNumberModal: boolean = false;
  signUpForm: FormGroup;
  logInForm: FormGroup;
  logInWithNumberForm: FormGroup;

  errorTextOnSignUp;
  errorTextLogIn;
  successMsg;


  constructor(private http: HttpServicesService) { }

  ngOnInit() {

    this.errorTextOnSignUp = false;
    this.errorTextLogIn = false;
    this.successMsg = false;


    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(10)]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required])
    });
    this.logInForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
    this.logInWithNumberForm = new FormGroup({
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)])
    })
  }

  goToLogIn() {
    this.loginModal = true;
    this.signUpModal = false;
    this.logInWithNumberModal = false;
  }

  goToSignUp() {
    this.signUpModal = true;
    this.logInWithNumberModal = false;
    this.loginModal = false
  }

  toLogInWithNumber() {
    this.logInWithNumberModal = true;
    this.signUpModal = false;
    this.loginModal = false
  }

  signUpFormSubmitted() {

    if (this.signUpForm.invalid) {
      this.errorTextOnSignUp = 'Please Fill all the feilds of the form.'
    } else {
      if (this.signUpForm.controls['password'].value != this.signUpForm.controls['confirmPassword'].value) {
        this.errorTextOnSignUp = "Passwords does not match"
      } else {
        let data = {
          email: `${this.signUpForm.value.email}`,
          phone: `${this.signUpForm.value.phoneNumber}`,
          password: `${this.signUpForm.value.password}`
        }

        this.http.signUPCall('/jv-scan/api/signup/', data).subscribe({
          next: (res: { status: string }) => {
            if (res.status == 'User Signup Successfuly') {
              this.errorTextOnSignUp = false;
              this.goToLogIn();
              this.signUpForm.reset();
              this.successMsg = "You have successfully registered yourself successfully."
            }
          },
          error: (error) => {
            this.errorTextOnSignUp = 'Mobile number already exists.'
          }
        })
      }
    }
  }

  logInFormSubmitted() {

    if (this.logInForm.invalid) {
      this.errorTextLogIn = 'Please enter valid credentials'
    } else {
      this.errorTextLogIn = false;
      let data = {
        username: `${this.logInForm.value.username}`,
        password: `${this.logInForm.value.password}`
      }
      console.log(data)
      this.http.signIn('/jv-scan/api/signin/', data).subscribe({
        next: (res: { token: string }) => {
          localStorage.setItem('userToken', res.token)
          this.http.dataIfLoggedIn(true)
          this.onClose()
          console.log(res)
        },
        error: (error) => {
          this.errorTextLogIn = error.error.status
          console.log(error.error.status);
        }
      })
    }
  }

  logInWithNumberFormSubmitted() {
    if (this.logInWithNumberForm.valid) {
      this.errorTextLogIn = false
      this.successMsg = "You have successfully registered yourself successfully."
      this.http.signupWithNumber('/jv-scan/api/login_with_otp/', this.logInWithNumberForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          localStorage.setItem('userToken', JSON.stringify(res.token))
        },
        error: (error) => {
          this.errorTextLogIn = 'Something is wrong'
        }
      }
      )
    } else {
      this.errorTextLogIn = 'Please fill the form correctly'
    }

  }

  onClose() {
    this.info.emit(false);
  }

}
