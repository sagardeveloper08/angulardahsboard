import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.scss']
})
export class T1Component implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
    this.secondFormGroup = new FormGroup({
      password: new FormControl('', Validators.required)
    });
  }

  get email() { return this.firstFormGroup.get('email'); }
  get password() { return this.secondFormGroup.get('password'); }

  onSubmit() {
    // do something here
  }
}
