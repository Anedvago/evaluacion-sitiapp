import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor(private productService: ProductService, private modalService: NgbModal,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.productService.listProducts().subscribe((data) => {
      this.products = data
    })
  }

  products: Product[] = []

  typeModal: string = "create"

  id: number = 0;
  name: string = "";
  state: string = "";
  unitValue: number = 0;
  img: string = ""

  product: Product

  ref: number = 0

/*   pimg = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`); */

  cleanForm() {
    this.id = 0;
    this.name = "";
    this.state = "";
    this.unitValue = 0;
    this.img = ""
  }
  cleanFormSearch() {
    this.ref = 0
  }

  insertProduct() {
    let product: Product = new Product(this.id, this.name, this.state, this.unitValue, this.img);
    this.productService.insertProduct(product).subscribe((data) => {
      this.productService.listProducts().subscribe((data) => {
        this.products = data
        this.cleanForm();
      })
    });
  }
  updateProduct() {
    let product: Product = new Product(this.id, this.name, this.state, this.unitValue, this.img);
    this.productService.updateProduct(product).subscribe((data) => {
      this.productService.listProducts().subscribe((data) => {
        this.products = data
        this.cleanForm();
      })
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  findProduct() {
    this.productService.findProductByRef(this.ref).subscribe((data) => {
      this.products = [data]
    })
  }
  deleteFilters() {
    this.productService.listProducts().subscribe((data) => {
      this.products = data
      this.cleanFormSearch();
    })
  }

  selectProduct(ref: number) {
    this.productService.findProductByRef(ref).subscribe((data) => {
      this.product = data;
      this.setProduct(this.product);
    })
  }

  setProduct(product: Product) {
    this.id = product.id
    this.name = product.name
    this.state = product.state
    this.unitValue = product.unitValue
    this.img = product.img
  }

  setTypeModal(typeModal: string) {
    this.typeModal = typeModal;
    if (typeModal == "create") {
      this.cleanForm();
    }
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.productService.listProducts().subscribe((data) => {
        this.products = data
        this.cleanForm();
      })
    });
  }


}
