import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

title ='Stars'
rating = 0;
starCount = 5;
ratingArr: boolean[] = [];
  constructor() { 
    this.ratingArr = Array(this.starCount).fill(false)
  }

  ngOnInit(): void {
  }

  returnStar(i: number){
    if (this.rating >= i + 1) {
      return 'star';
    }else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
    
  }
}
