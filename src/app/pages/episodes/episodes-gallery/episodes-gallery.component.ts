import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-gallery',
  templateUrl: './episodes-gallery.component.html',
  styleUrls: ['./episodes-gallery.component.scss']
})
export class EpisodesGalleryComponent implements OnInit {

  @Input() episodesList:any;

  constructor() { }

  ngOnInit(): void {
    console.log('episodes-gallery')
  }

}
