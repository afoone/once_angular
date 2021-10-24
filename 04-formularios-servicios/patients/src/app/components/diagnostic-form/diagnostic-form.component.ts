import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnostic-form',
  templateUrl: './diagnostic-form.component.html',
  styleUrls: ['./diagnostic-form.component.css'],
})
export class DiagnosticFormComponent implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      code: new FormControl(''),
      value: new FormControl(''),
    });
  }

  onSubmit(){
    console.log(this.form)
  }

  ngOnInit(): void {}
}
