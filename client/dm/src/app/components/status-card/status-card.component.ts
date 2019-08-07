import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Condition } from 'src/app/models/Condition';
import { Entity } from 'src/app/models/Entity';


@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {

  @Input()
  entity: Entity;

  conditions: Condition[] = [];


  constructor(private statusService: StatusService) {
  }

 ngOnInit() {
   this.getConditions();
 }

 getConditions() {
  this.statusService.getConditions().subscribe(conditions => {
    this.conditions = conditions; });
}

  addCondition(condition, entity) {

  }

}
