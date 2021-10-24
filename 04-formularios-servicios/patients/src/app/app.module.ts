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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { EditComponentComponent } from './views/edit-component/edit-component.component';
import { DiagnosticFormComponent } from './components/diagnostic-form/diagnostic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    MalesPipe,
    SumaPipe,
    AboutComponent,
    NewPatientComponent,
    PatientFormComponent,
    MenuComponent,
    EditComponentComponent,
    DiagnosticFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
