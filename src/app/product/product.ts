export class Product
{
    id: number;
    name: string = '';
    price: number = 0;
    constructor(id: number ,name: string, price: number){
        this.id = id,
        this.name = name,
        this.price = price
    }
}