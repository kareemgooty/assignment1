import { Pipe,PipeTransform } from "@angular/core";

@Pipe(
    {
        name: "customPipe"
    }
)

export class CustomePipe implements PipeTransform{
    transform(value: String) {
        return value.toUpperCase();
    }

}