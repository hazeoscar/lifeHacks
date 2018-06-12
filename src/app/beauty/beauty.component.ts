import { Component, OnInit } from '@angular/core';
import { BeautyHackService } from '../beauty-hack.service';
import { Beauty } from '../beauty';


@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {

  beauty: Beauty[];
  indoor: Beauty[];

  constructor(private beautyHackService: BeautyHackService) { }

  ngOnInit() {

  this.beautyHackService.getBeauty().subscribe(content => this.beauty = content);
  this.beautyHackService.getIndoor().subscribe(result => this.indoor = result);
  }

}
