import {Injectable} from "@angular/core";
import {PouvoirResult} from "./pouvoir.result";
import {environment} from "../../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})

export class PouvoirService {
  constructor(){}

  getPouvoirsData(): Promise<PouvoirResult> {
    return new Promise((resolve, reject) => {
      fetch(environment.apiUrl+"/pouvoirs").then(res => res.json())
        .then(result => resolve(result))
        .then(result => reject(result))
    })
  }
}
