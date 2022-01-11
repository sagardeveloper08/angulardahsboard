import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.scss']
})
export class T2Component implements OnInit {
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
