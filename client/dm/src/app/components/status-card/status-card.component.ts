import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';


@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {

  conditions: string[];
  private statusService: StatusService;

  constructor() { }

  ngOnInit() {
   this.conditions = this.statusService.getConditions();
   console.log(this.conditions);
  }

}
