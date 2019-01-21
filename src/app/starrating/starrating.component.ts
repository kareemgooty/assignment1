import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-star-rating",
    templateUrl: './starrating.component.html',
    styleUrls: ['./star.component.css']
})
export class StarRatingComponent {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 6;
    }

    onRatingClicked():void{
        this.ratingClicked.emit(`The rating Clicked is ${this.rating}`);
    }

}