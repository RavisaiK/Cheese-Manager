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

  title = 'Opex prediction for the month of march';
   type = 'ComboChart';
   data = [
      ["Salaries", 3, 2, 2.5],
      ["Reimbursements",2, 3, 2.5],
      ["Food", 1, 5, 3],
      ["Mainteanance", 3, 9, 6],
      ["Bills", 4, 2, 3],
      ["Cabs", 4, 1, 2],
   ];
   columnNames = ['Salaries', 'Reimbursements','Food','Mainteanance', 'Bills', 'Cabs'];
   options = {   
      hAxis: {
         title: 'Person'
      },
      vAxis:{
         title: 'Opex Prediction over the past two months'
      },
      seriesType: 'bars',
      series: {2: {type: 'line'}}
   };
   width = 550;
   height = 400;

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
