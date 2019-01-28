import { Component, OnInit } from "@angular/core";
import { IMusic } from './IMusic';
import { ALL_MUSIC } from './mock-music';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
  })

export class MusicComponent implements OnInit {
   
    title: string;
    allMusic: IMusic[];
    selectedMusic: IMusic;
    
    ngOnInit(): void {
        this.title = "Music is working";
        this.allMusic = ALL_MUSIC;
    }

    dislay(id):void{
        this.selectedMusic = this.allMusic.find((data)=> (data.id === id))
    }
}