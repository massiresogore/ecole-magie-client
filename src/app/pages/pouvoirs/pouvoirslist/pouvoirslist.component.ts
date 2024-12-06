import {Component, Input} from '@angular/core';
import {Pouvoir} from "../pouvoir.interface";
import {UibuttonblockComponent} from "../../ui/uibuttonblock/uibuttonblock.component";

@Component({
  selector: 'app-pouvoirslist',
  standalone: true,
  imports: [
    UibuttonblockComponent
  ],
  templateUrl: './pouvoirslist.component.html',
  styleUrl: './pouvoirslist.component.css'
})
export class PouvoirslistComponent {
  @Input() pouvoirs: Pouvoir[] = []

  createPouvoir(item: Pouvoir) {
    alert("Create pouvoir id: " + item.id)
  }
  updatePouvoir(item: Pouvoir) {
    alert("Update pouvoir id: " + item.id)
  }
  readPouvoir(item: Pouvoir) {
    alert("Update pouvoir id: " + item.id)

  }
  deletePouvoir(item: Pouvoir) {
    alert("Delete pouvoir id: " + item.id)
  }
}
