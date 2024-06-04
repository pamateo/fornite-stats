import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  public statsSolo:any;
  public statsDuo:any;
  public statsSquad:any;
  public currentStats:any;
  public encontrado:boolean=false;
  public currentSegment:string='solo';
  public type:Number=1;



  public username=this.fb.group({
    name:[''],
    platform:['']
  })
  constructor(private fb:FormBuilder, private search:SearchService, private alertController:AlertController) {
    
  }


  searchPlayer(mode?:string){
    console.log(this.username.get('name').value);
    if(this.username.get('name').value!==null){
      this.search.getUserStatsByName(this.username.get('name').value, this.username.get('platform').value).subscribe({
        next:res=>{
          if(res){
            switch(mode){
              case 'solo':
                this.statsSolo=res['data']['stats']['gamepad']['solo'];
                this.currentStats=this.statsSolo;
                this.type=1;
                console.log('obteniendo stats de solo');
                console.log(this.statsSolo);
                break;
                case 'duo':
                  this.statsDuo=res['data']['stats']['gamepad']['duo'];
                  this.currentStats=this.statsDuo;
                  this.type=2;
                  console.log('obteniendo stats de duo');
                  console.log(this.statsDuo);
                  break;
                  case 'squad':
                    this.statsSquad=res['data']['stats']['gamepad']['squad'];
                    this.currentStats=this.statsSquad;
                    this.type=4;
                    console.log('obteniendo stats de squad');
                    console.log(this.statsSquad);
                break;



            }
            this.encontrado=true;
          }
        },
        error:async err=>{
          if(err){
            const alert= await this.alertController.create({
              header:'Error',
              message:err['error']['error'] ||'Jugador no existe',
              buttons:['Action'],
            });

            await alert.present();
          }
        }
      })

    }
  }

  onSegmentChange(event){
    this.currentSegment=event.detail.value;
    
    
  } 

}
