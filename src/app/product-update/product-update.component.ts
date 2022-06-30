import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { UpdateProduct } from '../models/updateProduct.model';
import { InTwineProduct } from '../models/intwine_product.model';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  public editForm!:FormGroup;
  public id!:string|null;
  public product!: InTwineProduct;

  constructor(private route:ActivatedRoute,
    private postService:PostService,
    private formbuilder:FormBuilder ) {

      this.route.paramMap.subscribe( par => {
        this.id = par.get('id');
      });
      this.postService.getProductById(this.id)
      .subscribe((e:InTwineProduct) => {
        this.product = e;
        this.editForm.patchValue({
          title: e.title,
          price: e.price
       });
        });
      this.createForm();
   }

  public createForm(){
    this.editForm = this.formbuilder.group({
      title:['',[Validators.required]],
      price:['',[Validators.required]],
    });

  }
 
   public submitForm(formdata:UpdateProduct){
    if(!this.editForm.valid){
      window.alert("Form is not valid.");
      return;
    }else{ 
      this.postService.editProduct(this.id, formdata)
      .subscribe((par:UpdateProduct)=>{
        window.alert(`Your product with title ${par.title} was updated.`);
        this.editForm.reset();
      })

    }
  }

  ngOnInit(): void {
  }

}
