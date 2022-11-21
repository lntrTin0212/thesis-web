import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OntologyService {
  BASE_URL = "http://localhost:3000/api/v1/topic"
   headersOpt = {  
    "content-type": "application/json",
};
  constructor(
    private http: HttpClient
  ) { }

  getTopics() {
    return this.http.get(`${this.BASE_URL}/getTopics`)
  }

  getTopicDetails(topicName:string) {
    return this.http.get(`${this.BASE_URL}/getSubClass/${topicName}`)
  }

  getTopicInfo(topic:string, vocab:string){
    return this.http.get(`${this.BASE_URL}/getTopicDetail/${topic}/${vocab}`)
  }
  
  getSubClass(topicName: string) {
    return this.http.get(`${this.BASE_URL}/getSubClass/${topicName}`)
  }

  createNew(form:any) {
    return this.http.post(`${this.BASE_URL}/new`,form)
  }

  deleteVocab(vocab1:string) {
    return this.http.delete(`${this.BASE_URL}/deleteVocab/${vocab1}`, {headers: this.headersOpt})
  }
}
