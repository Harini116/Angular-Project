import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  var1 :any;
  product_id :any;
  constructor(private aR:ActivatedRoute){
    this.aR.params.subscribe((params)=>{
    this.var1=params;
    this.product_id = this.var1.id;
    console.log(this.product_id);
  })
  }
}
