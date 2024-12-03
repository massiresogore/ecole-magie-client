import {Component,EventEmitter, Input, Output} from '@angular/core';
import {Magicien} from "../magicien.interface";

@Component({
  selector: 'app-magicien-info',
  standalone: true,
  imports: [],
  templateUrl: '../template/magicien-info.component.html',
  styleUrl: '../css/magicien-info.component.css'
})
export class MagicienInfoComponent {
  @Input() magicien: Magicien = {
    id: -1,
    name: "test name",
    numberOfPowers: 0
  };

  @Output() updateMagicienEvent = new EventEmitter();
  @Output() deleteMagicienEvent = new EventEmitter<Magicien>();
  @Output() readMagicienEvent = new EventEmitter<Magicien>();

  updateMagicien(item:Magicien) {
    this.updateMagicienEvent.emit(item);
  }

  deleteMagicien(item:Magicien){
    this.deleteMagicienEvent.emit(item);
  }
  readMagicien(item:Magicien){
    this.updateMagicienEvent.emit(item);
  }
}
