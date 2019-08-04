import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private logger: LogService) {
   }

  ngOnInit() {
  }
  testLog():void{
    this.logger.log("Test the log() method");
  }
}
