import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   res : any ;
   public homeScore : any;
   public awayScore : any;
   public home : any;
   public away : any;
  constructor(private http:HttpClient) {}
  onSubmit(){
    //http://localhost:9000/?
    this.http.get('http://localhost:5000/?' + 'home=' + this.home +'&away=' + this.away).subscribe(respon => {

      if(respon['prediksi'] === '[1]'){
        this.res = 'Pertandingan berakhir seri!';
      } else if(respon['prediksi'] === '[2]'){
        this.res = 'Pertandingan dimenangkan oleh HomeTeam!';
      } else {
        this.res = 'Pertandingan dimenangkan oleh AwayTeam!';
      }
      this.homeScore = respon['Home'];this.awayScore = respon['Away'];
    });
  }
  onChangeHome(event){
    this.home = event.detail.value
  }
  onChangeAway(event){
    this.away = event.detail.value
  }
}
