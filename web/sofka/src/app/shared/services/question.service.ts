import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionI } from '../models/question-i';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url:string = "http://localhost:8080/";

  constructor(private http:HttpClient) {

  }

  getPage(page:number):Observable<QuestionI[]>{
    let direccion = this.url + "pagination/"+page;
    return this.http.get<QuestionI[]>(direccion);
  }

  getCountRegister():Observable<number>{
    let direccion = this.url + "totalPages";
    return this.http.get<number>(direccion);
  }

}
