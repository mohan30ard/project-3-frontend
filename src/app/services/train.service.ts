import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  [x: string]: any;

  constructor(private https: HttpClient) { }
  public addTrain(train: any) {
    console.log(train)
    return this.https.post(`${baseUrl}/train/add`, train);
  }

  public Alltrains() {
    return this.https.get(`http://localhost:9848/train/all`);
  }


  searchTrain(search: any) {
    console.log("service layer" + search)
    return this.https.get(`http://localhost:9848/train/route/all/` + search.start + `/` + search.end + `/` + search.date);
  }

  
 

  //delete train
  // public deleteTrain(tId: any) {
  //   return this._http.delete(`${baseUrl}/train/${tId}`);
  // }

  // //get the single quiz

  // public getQuiz(qId) {
  //   return this._http.get(`${baseUrl}/quiz/${qId}`);
  // }

  // //update quiz
  // public updateQuiz(quiz) {
  //   return this._http.put(`${baseUrl}/quiz/`, quiz);
  // }

  // //get quizzes of category
  // public getQuizzesOfCategory(cid) {
  //   return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  // }



}
