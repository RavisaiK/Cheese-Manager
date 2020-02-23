import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'OPEX for the month of January';
  type = 'PieChart';
  data = [
    ['Salaries', 45.0],
    ['Reimbursements', 26.8],
    ['Food', 12.8],
    ['Mainteanance', 8.5],
    ['Bills', 6.2],
    ['Cabs', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
  };
  width = 550;
  height = 400

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  public dashboard() {
    this.router.navigateByUrl('dashboard');
  }

}
