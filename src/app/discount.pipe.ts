import { Pipe,PipeTransform } from "@angular/core";

@Pipe(
    {
        name: "discountPipe"
    }
)
export class DiscountPipe implements PipeTransform{
    transform(value: number, discount: number, symbol: string) {
        let diff = (value - discount);
        return `${ symbol } ${ diff }` ;
    }
}