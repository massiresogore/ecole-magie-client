import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pouvoir} from "../../pouvoirs/pouvoir.interface";

@Component({
  selector: 'app-uibuttonblock',
  standalone: true,
  imports: [],
  templateUrl: './uibuttonblock.component.html',
  styleUrl: './uibuttonblock.component.css'
})
export class UibuttonblockComponent {
  @Input() pouvoir: Pouvoir = {
    id: -1,
    name: "default name",
    description: "default name",
    imageUrl: "default name",
  }

  @Output() updatePouvoirEvent = new EventEmitter<Pouvoir>();
  @Output() deletePouvoirEvent = new EventEmitter<Pouvoir>();
  @Output() readPouvoirEvent = new EventEmitter<Pouvoir>();

  updatePouvoir(item: Pouvoir) {
   this.updatePouvoirEvent.emit(item);
  }

  deletePouvoir(item: Pouvoir) {
    this.deletePouvoirEvent.emit(item);
  }

  readPouvoir(item: Pouvoir) {
    this.readPouvoirEvent.emit(item)
  }
}
