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

  updatePouvoir(item: Pouvoir) {
    alert("Update id: " + item.id)
  }
  readPouvoir(item: Pouvoir) {
    alert("Update id: " + item.id)

  }
  deletePouvoir(item: Pouvoir) {
    alert("Delete id: " + item.id)
  }
}
