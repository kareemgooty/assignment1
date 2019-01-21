import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from './IProduct';
@Pipe({
        name: "productFilter"
    }
)

export class ProductFilterPipe implements PipeTransform
{
    transform(value: IProduct[], userDate: string) {
        userDate = userDate ? userDate.toLowerCase() : null;
        return userDate ? value.filter((product: IProduct) =>
            (product.productName.toLowerCase().indexOf(userDate) !== -1)) : value;
    }
}