import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getUserStatsByName(username:string, platform:string){
    const cadena=`https://fortnite-api.com/v2/stats/br/v2?name=${username}`;
    console.log('cadena: ',cadena);
    return this.http.get(`https://fortnite-api.com/v2/stats/br/v2?name=${username}&accountType=${platform}`, this.header);
  }

  get header(){
    return {
      headers:{
        'Authorization':'961788f9-7985-4453-b27e-b7a8b0fb1f0c'
      }
    }
  }
}
