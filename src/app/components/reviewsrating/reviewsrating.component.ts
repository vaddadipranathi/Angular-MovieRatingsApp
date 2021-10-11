import { Component, OnInit } from '@angular/core';
import { MoviereviewsService } from 'src/app/services/moviereviews.service';

@Component({
  selector: 'app-reviewsrating',
  templateUrl: './reviewsrating.component.html',
  styleUrls: ['./reviewsrating.component.css']
})
export class ReviewsratingComponent implements OnInit {

  constructor(private service:MoviereviewsService) { }

  ngOnInit(): void {
    this.GetItems();
  }
  public v:any;
  public data:any;
  GetItems() {
    this.service.getItems().subscribe(data1 => {
      this.data = data1;
      console.log(data1);
      this.v=this.data.Rating;
    });
  }
  DeleteMovies(item: any) {
    this.service.deleteMovies(item.id).subscribe(data => {
      this.GetItems();
      this.v=this.data.Rating;
      console.log('deleted after adding');
      alert('Your Review Has Been Deleted.')
    })
  }
  getRating(rate:string){
    return new Array(Number(rate));
  }
}
