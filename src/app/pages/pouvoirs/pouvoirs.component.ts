import {Component, inject, Output} from '@angular/core';
import {PouvoirService} from "./pouvoir.service";
import {Pouvoir} from "./pouvoir.interface";
import {PouvoirslistComponent} from "./pouvoirslist/pouvoirslist.component";

@Component({
  selector: 'app-pouvoirs',
  standalone: true,
  imports: [
    PouvoirslistComponent
  ],
  templateUrl: './template/pouvoirs.component.html',
  styleUrl: './css/pouvoirs.component.css'
})
export class PouvoirsComponent {
  pouvoirservice = inject(PouvoirService);
  pouvoirs: Pouvoir[] = [];
  statusCode: number|null = null;
  message: string | null = "";

  constructor() {
    this.pouvoirservice.getPouvoirsData()
      .then(data => {
        this.pouvoirs = data.data;
        this.statusCode = data.code;
        this.message = data.message;
        //console.log(this.pouvoirs);
      })
      .then(error => {
        console.log(error)
      })
  }


}
