import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dairy-card',
  templateUrl: './dairy-card.component.html',
  styleUrls: ['./dairy-card.component.scss'],
})
export class DairyCardComponent implements OnInit {

  @Input() details:any;

  constructor(private router:Router) {
   }

  ngOnInit() {
    
  }

  removeUnder(str:string){
    return  str.replace(/_/g," ").toLowerCase();
  }

  getWeight(str:string){
      var gms = str.toLowerCase().split('_')
    return `${gms[1]} ${gms[0]}`;
  }
  
  routeTo(path,pid){
    this.router.navigate([path,pid]);
  }

}
