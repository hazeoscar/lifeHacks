import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import {Outdoor} from '../outdoor';
import {OutdoorhacksService} from '../outdoorhacks.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    reviews: Review[];
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
      this.reviewService.getReviews().subscribe(data => this.reviews = data);
  }

}
