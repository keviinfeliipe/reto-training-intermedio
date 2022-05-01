import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionI } from '../../models/question-i';
import { AuthService } from '../../services/authentication.service'
import { QuestionService } from '../../services/question.service'



@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss',]
})
export class CreateQuestionComponent implements OnInit {

  question:QuestionI | undefined;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private services: QuestionService
  ) { }

  ngOnInit(): void {
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }



}
