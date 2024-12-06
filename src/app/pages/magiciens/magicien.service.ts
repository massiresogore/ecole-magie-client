import {Injectable} from "@angular/core";
import {MagicienResult} from "./magicienresult";
import {environment} from "../../../environments/environment.development";
@Injectable({
  providedIn: 'root'
})

export class MagicienService {
  constructor() { }
  getMagicientData():Promise<MagicienResult>{
    return new Promise((resolve, reject) => {
      fetch(environment.apiUrl+"/wizards").then(res => res.json())
        .then(result => resolve(result))
        .catch((error) => reject(error));
    })
  }
}

