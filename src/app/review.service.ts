import { Injectable } from '@angular/core';
import { Review } from './review';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
    reviews: Review[] = [
        {
            id: 1,
            firstName: 'Gurinder',
            lastName: 'Girn',
            datePosted: new Date('03/04/2018'),
            like: true,
            comment: 'Really nice life hacks. Love to use these hacks'
        },
        {
            id: 2,
            firstName: 'Yeganeh',
            lastName: 'Y.',
            datePosted: new Date('03/04/2018'),
            like: false,
            comment: 'not useful hacks'
        }
    ];


    // method to display outdoor hacks
    getReviews(): Observable<Review[]> {
        return of(this.reviews);
    }
  constructor() { }
}
