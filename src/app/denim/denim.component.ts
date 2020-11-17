import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-denim',
  templateUrl: './denim.component.html',
  styleUrls: ['./denim.component.css']
})
export class DenimComponent implements OnInit {
  denimProducts: Product[];
  constructor(private productService: ProductService, @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    
  }

}
