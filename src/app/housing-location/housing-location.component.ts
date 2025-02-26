import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <!-- // [src] für Property Binding, es wird gesagt, dass die Src eine Ressource ist  -->
       <!-- {{}} wird verwendet um Variable einzusetzen wie $"{}" -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}} , {{housingLocation.state}}</p>
      <!-- dynamic Value [] -->
      <a [routerLink]="['/details', housingLocation.id ]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})


export class HousingLocationComponent {
  // muss initialisiert werden sonst Fehler --> !, damit Fehler verschwindet.
  @Input() housingLocation!: HousingLocation;
}
