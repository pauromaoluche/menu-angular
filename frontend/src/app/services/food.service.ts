import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../Food';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
private baseApiUrl = environment.baseApiUrl
private apiUrl = `${this.baseApiUrl}api/foods`
  constructor(private http: HttpClient) { }

  createFood(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData)

  }
}
