import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  public patient: Patient;

  public edad: string;

  @Input('id')
  patientId: string | undefined;

  constructor(private patientService: PatientService, private router: Router) {
    this.patient = { name: '', diagnostics: [] };
    this.edad = '';
  }

  ngOnInit(): void {
    console.log(this.patientId);
    if (this.patientId) {
      this.patientService
        .getPatient(this.patientId)
        .subscribe((res) => (this.patient = res));
    }
  }

  savePatient() {
    console.log(this.patient);
    if (!this.patientId) {
      this.patientService.savePatient({ ...this.patient }).subscribe(
        ()=>this.router.navigate(['/'])
      );
    } else {
      this.patientService.savePatient(this.patient, this.patientId).subscribe(
        ()=>this.router.navigate(['/'])
      )
    }
  }
}
