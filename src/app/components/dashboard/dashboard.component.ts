import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Search } from 'src/app/models/contact';
import { MoviereviewsService } from 'src/app/services/moviereviews.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:MoviereviewsService,private r:Router) { }
 public search =new Search();
 public v:any=10;
 public movie:any;
 public SearchField:String='';
 public status:boolean=false;
public a:boolean=false;
public movienum:any;
public c:string='aaaa';
  ngOnInit(): void {
  }
SubmitForm(form:NgForm){
  if(form.valid){
    console.log('form submitted sucesfully')
  }else{
    alert('Enter value in movie field')
  }
} public data:any;
GetItems() {
  this.service.getItems().subscribe(data1 => {
    this.data = data1;
    console.log(data1);
  });
}
DisplayMovies() :any{
  this.service.getMovie(this.search.SearchField).subscribe(data1 => {
   this.movie = data1;
   this. a=this.movie.Response;
   if(this.movie.Response=="True"){
     this.c='true';
     console.log('true in conosle');
   }
   if(this.movie.Response=="False"){
     this.c='false';
     console.log('false in conosle');
   }
    
  });
 
}public rating:any;
AddMovie(){
  let list={
    Title:this.movie.Title,
    Director:this.movie.Director,
    Actors:this.movie.Actors,
    Year:this.movie.Year,
    Relased:this.movie.Relased,
    Rating:this.rating,
    Poster:this.movie.Poster

  }
  this.service.addMovie(list).subscribe(data => {
    this.GetItems();
    console.log('added');
    console.log(data);
    alert('Your Rating has been added')
    this.r.navigate(['/add/0']);
  })
}
}
