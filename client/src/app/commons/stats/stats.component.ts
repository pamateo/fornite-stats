import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnChanges {
  @Input() stats:any;
  @Input() mode:Number;
  public gameMode:string;

  
  constructor() { 
  }

  
  
  ngOnChanges(): void {
    console.log(this.mode);
    switch(this.mode){
      case 1:
        this.gameMode='Solo';
        break;
      case 2:
        this.gameMode='Duo';
        break;
      case 4:
        this.gameMode='Squad';
        break;
    }
    
  }


}
