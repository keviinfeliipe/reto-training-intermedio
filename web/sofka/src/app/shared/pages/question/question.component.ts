import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerI } from '../../models/answer-i';
import { QuestionI } from '../../models/question-i';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/authentication.service'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {


  question:QuestionI | undefined;
  private answers: AnswerI[] | undefined;

  constructor(
    private route:ActivatedRoute,
    private questionService:QuestionService,
    public authService:AuthService
    ) {

    }

  id:string | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id=`${id}`;
    this.getQuestions(`${id}`);
    //this.AddAnwsers(0);
  }

  getQuestions(id:string):void{
    this.questionService.getQuestion(id).subscribe(data=>{
      this.question=data;
    })
  }

  AddAnwsers(index:number) {
    let counter=index;
    while(counter<(index+10)){
      console.log(counter);
      //this.answers?.push(this.question?.answers[index]);
      counter++;
    }
  }

}
