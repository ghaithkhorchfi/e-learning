import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }


  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiServerUrl}/api/questions/findAll`)
  }
}

