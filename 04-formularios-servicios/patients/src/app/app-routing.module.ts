import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticFormComponent } from './components/diagnostic-form/diagnostic-form.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { AboutComponent } from './views/about/about.component';
import { EditComponentComponent } from './views/edit-component/edit-component.component';
import { NewPatientComponent } from './views/new-patient/new-patient.component';

const routes: Routes = [
  { path: 'diagnostics/new', component: DiagnosticFormComponent },
  { path: 'patients/new', component: NewPatientComponent },
  { path: 'patients/list', component: PatientListComponent },
  { path: 'patients/:id', component: EditComponentComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'patients/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
