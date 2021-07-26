import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { 
    
  }

  getTopHeadLines(){

    return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?q=tesla&from=2021-06-21&sortBy=publishedAt&apiKey=0d02662d06d84ee78e8b93b701eaa1e5');
  }
}
