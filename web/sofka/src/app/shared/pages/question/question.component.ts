import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionI } from '../../models/question-i';
import { QuestionService } from '../../services/question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {


  question:QuestionI | undefined;
  constructor(
    private route:ActivatedRoute,
    private questionService:QuestionService
    ) {

    }


  id:string | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id=`${id}`;
    this.questionService.getQuestion(this.id).subscribe(data=>{
      console.log(data);
      this.question=data;
    })
  }

}
