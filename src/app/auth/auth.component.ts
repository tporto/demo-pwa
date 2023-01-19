import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, Error, JwtService } from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  title: String = '';
  errors: Error = { errors: {} };
  isSubmitting = false;
  authForm: FormGroup;
  errorMessage = ''
  showPassword = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private jwtService: JwtService,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };
    const credentials = this.authForm.value;

    this.userService.attemptAuth('login', credentials).subscribe({
      next: (data) => {
        this.jwtService.save(data);
        this.router.navigate(['home'])
      },
      error: (error) => {
        this.errorMessage = error.status === 401
          ? 'Usuário ou senha inválida.'
          : 'Erro no sistema.'

        console.error(error);
      },
    }).add(() => {
      this.isSubmitting = false;
    });
  }
}
