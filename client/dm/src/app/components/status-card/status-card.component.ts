import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Condition } from 'src/app/models/Condition';


@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {

  constructor(private statusService: StatusService) {
  }

 conditions: Condition[] = [];

 getConditions() {
   this.statusService.getConditions().subscribe(conditions => {
      this.conditions = conditions; });
   console.log(this.conditions);
 }

 ngOnInit() {
   this.getConditions();
 }

}
