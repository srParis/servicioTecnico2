import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    // if (this.loginForm.invalid) {
    //   this.loginForm.setErrors({ login: literal.errors.emptyForms });
    //   return;
    // }
    // this.loading = true;

    // setTimeout(() => {
    //   this.serviceLogin.checkLogin().subscribe(data => {
    //     this.serviceLogin.setDatosForm(data);
    //     localStorage.setItem('userData', JSON.stringify(data));
    //     if (data.user === this.loginForm.get('user').value && data.pass === +this.loginForm.get('pass').value) {
    //       this.route.navigateByUrl('/main');
    //     } else {
    //       this.loginForm.setErrors({ login: literal.errors.login });
    //     }
    //     this.loading = false;
    //   });
    // }, 1000);

}
