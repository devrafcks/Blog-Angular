import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent  {
  @Input() photoSCover: string = '';
  @Input() cardSTitle: string = '';
  @Input() cardSDescription: string = '';
  @Input() linkSArticle: string = '';
}
