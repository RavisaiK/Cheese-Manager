import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public share = 1;
  
  title = 'Overall deficit in OPEX (in millions)';
   type = 'BarChart';
   data = [
      ["2012", 900, 390],
      ["2013", 1000, 400],
      ["2014", 1170, 440],
      ["2015", 1250, 480],
      ["2016", 1530, 540]
   ];
   columnNames = ['Year', 'Asia','Europe'];
   options = {   
      hAxis: {
         title: 'Year'
      },
      vAxis:{
         minValue:0
      }  
   };
   width = 550;
   height = 400

  data$;
  constructor( private dataService: DataService, private router: Router) { }

  fetchData() {
    this.data$ = this.dataService.fetchData();
    this.share = 2;
    console.log(this.data$);
  }

  ngOnInit(): void {
  }

  public login() {
    this.router.navigateByUrl('login');
  }

}
