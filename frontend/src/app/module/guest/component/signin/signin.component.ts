import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../security/service';
import { ApiResponse } from '@shared/model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    // nous on veut un objet de type SigninPayload
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  signin(): void {
    if (this.formGroup.valid) {
      this.authService.signin(this.formGroup.value)
        .subscribe((response: ApiResponse) => {
          if (!response.result) {
            alert(response.code);
          }
        });
    } else {
      alert('error');
    }
  }

}
