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
    let direction = this.url + "pagination/"+page;
    return this.http.get<QuestionI[]>(direction);
  }

  getTotalPages():Observable<number>{
    let direction = this.url + "totalPages";
    return this.http.get<number>(direction);
  }

  getCountQuestions():Observable<number>{
    let direction = this.url + "countQuestions";
    return this.http.get<number>(direction);
  }

  saveQuestion(question:QuestionI):void{
    let direction = this.url + "create";
    this.http.post<QuestionI>(direction,question);
  }


}
