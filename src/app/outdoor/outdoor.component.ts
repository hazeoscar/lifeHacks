import { Component, OnInit } from '@angular/core';
import { OutdoorhacksService } from '../outdoorhacks.service';
import { Outdoor } from '../outdoor';


@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.css']
})
export class OutdoorComponent implements OnInit {
    hacks: Outdoor[];
    cookhacks: Outdoor[];
  constructor(private outdoorhacksService: OutdoorhacksService) { }

  ngOnInit() {
      this.outdoorhacksService.getHacks().subscribe(data => this.hacks = data);
      this.outdoorhacksService.getCookingHacks().subscribe(result => this.cookhacks = result);
  }

}
