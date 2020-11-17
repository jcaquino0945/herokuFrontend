import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.productService.getBestSellers().subscribe(products => this.products = products)
    
  }
  

}

