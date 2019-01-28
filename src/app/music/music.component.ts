import { Component, OnInit } from "@angular/core";
import { IMusic } from './IMusic';
import { ALL_MUSIC } from './mock-music';
import { MusicService } from './music.service';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
  })

export class MusicComponent implements OnInit {
   
    title: string;
    allMusic: any[];
    selectedMusic: IMusic;
    constructor(private _musicService: MusicService){}
    ngOnInit(): void {
        this.title = "Music is working";
        this._musicService.getAllMusic().subscribe((data) => 
        this.allMusic = data);
        console.log("Output: "+this.allMusic);
    }

    dislay(id):void{
        this.selectedMusic = this.allMusic.find((data)=> this.isFound(data));
    }
    
    isFound(data):boolean{
        console.log( typeof data  );
        return true;
    }
}