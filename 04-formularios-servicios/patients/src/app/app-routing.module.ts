import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { AboutComponent } from './views/about/about.component';
import { NewPatientComponent } from './views/new-patient/new-patient.component';

const routes: Routes = [
  { path: 'patients/new', component: NewPatientComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: PatientListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
