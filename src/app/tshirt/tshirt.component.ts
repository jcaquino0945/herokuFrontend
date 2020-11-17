import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {
  TshirtProducts: Product[];
  constructor(private productService: ProductService, @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.productService.getTshirtProducts().subscribe(TshirtProducts => this.TshirtProducts = TshirtProducts);
  }

}
