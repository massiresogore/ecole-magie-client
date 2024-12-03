import {Component, inject} from '@angular/core';
import {MagicienService} from "./magicien.service";
import {Magicien} from "./magicien.interface";
import {MagicienInfoComponent} from "./magicien-info/magicien-info.component";
import {isReactive} from "@angular/core/primitives/signals";
import {EcoleResult} from "../../services/ecoleResult";
import {MagicienResult} from "./magicienresult";
import {environment} from "../../../environments/environment.development";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {log} from "node:util";

@Component({
  selector: 'app-magiciens',
  standalone: true,
  imports: [
    MagicienInfoComponent
  ],
  templateUrl: './template/magiciens.component.html',
  styleUrl: './css/magiciens.component.css'
})
export class MagiciensComponent {
  magicienService:MagicienService = inject(MagicienService);
  statusCode: number | null = null;
  magiciens:Magicien[] |null = null;
  message: string | null = null;

  constructor() {
    this.magicienService.getMagicientData()
      .then(data => {
      this.magiciens = data.data;
      this.statusCode = data.code;
      this.message=data.message;
    })
      .then(error => {
          console.log("")

      })
  }

  readMagicien(item:Magicien){
    alert(item.id)
  }
  updateMagicien(item:Magicien) {
    alert(item.id)

  }
  deleteMagicien(item:Magicien){
    alert(item.id)
  }

  getAny(){
    console.log(this.magiciens);
    console.log(environment.apiUrl)
  }

}
