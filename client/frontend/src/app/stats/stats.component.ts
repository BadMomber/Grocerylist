import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  products: Product[] = [];
  number: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((products) => {
      this.products = products;
      console.log(products.length);
    });
  }

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Housekeeping' },
    { data: [330, 600, 260, 700], label: 'Groceries' },
    { data: [120, 455, 100, 340], label: 'Cosmetics' },
    { data: [45, 67, 800, 500], label: 'Other' }
  ];

  chartLabels = ['January', 'February', 'March', 'April'];


  myColors = [
    {
      backgroundColor: '#F7E957',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    {
      backgroundColor: '#F63E84',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    {
      backgroundColor: '#963BEC',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    {
      backgroundColor: '#3EF64A',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    }
    // ...colors for additional data sets
  ];

}
