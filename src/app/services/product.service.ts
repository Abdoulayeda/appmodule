import { Product
 } from "../product/product";
export class ProductService {

    products: Array<Product> = [
        new Product(1,  "Samsung", 800),
        new Product(2, "Iphone", 900),
        new Product(3, "Tecno", 300),
        new Product(4, "Huawei", 600),
        new Product(5, "Itel", 200),
    ]

  
    public getData() : Array<any>{
        return this.products;
    }

  public  getProductDetail(id: any) {
       return this.products.find((product) => product.id == id);
    }
}