import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getPatients = () => {
    return this.httpClient.get<Patient[]>('http://localhost:4000/patients');
  };

  getPatient = (id: string): Observable<Patient> => {
    return this.httpClient.get<Patient>(`http://localhost:4000/patients/${id}`);
  };

  deletePatient = (id: string): Observable<Patient> => {
    return this.httpClient.delete<Patient>(
      `http://localhost:4000/patients/${id}`
    );
  };

  savePatient = (patient: Patient, id: string = ''): Observable<Patient> => {
    console.log("saving patient", id)
    if (id) {
      return this.httpClient
        .put<Patient>(
          'http://localhost:4000/patients/' + id,
          patient,
          this.httpOptions
        )
        .pipe(catchError(this.handleError));
    } else {
      return this.httpClient
        .post<Patient>(
          'http://localhost:4000/patients',
          patient,
          this.httpOptions
        )
        .pipe(catchError(this.handleError));
    }
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
