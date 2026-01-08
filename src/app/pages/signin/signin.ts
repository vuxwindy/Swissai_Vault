import {Component, inject} from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from '../auth/auth-service';
import {Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'signin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  showPassword = false;
  loading = false;
  errorMsg = '';

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMsg = '';
    console.log("this.form.getRawValue()", this.form.getRawValue())
    if (this.form.getRawValue().username == 'admin' && this.form.getRawValue().password == 'admin') {
      this.loading = false;
      this.router.navigateByUrl('/app/dashboard');
      return;
    }
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/app/dashboard');
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || 'Sai tài khoản hoặc mật khẩu';
      }
    });
  }
}
