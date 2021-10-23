import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { MalesPipe } from './pipes/males.pipe';
import { SumaPipe } from './pipes/suma.pipe';
import { AboutComponent } from './views/about/about.component';
import { NewPatientComponent } from './views/new-patient/new-patient.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    MalesPipe,
    SumaPipe,
    AboutComponent,
    NewPatientComponent,
    PatientFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
