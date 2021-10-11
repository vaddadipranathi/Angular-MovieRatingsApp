import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviereviewsService {

  constructor(private http:HttpClient) { }
  getMovie(name:String){
    return this.http.get(`http://www.omdbapi.com/?apikey=f99f8271&t=${name}`);
  }
  getItems() {
    return this.http.get('http://localhost:3000/Moviedata');
  }
  addMovie(notedata: any) {
    return this.http.post(`http://localhost:3000/Moviedata`, notedata);
  }
  deleteMovies(id: number) {
    return this.http.delete(`http://localhost:3000/Moviedata/${id}`);
  }
}
