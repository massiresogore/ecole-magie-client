import {Magicien} from "./magicien.interface";
import {data} from "./data";
import {Injectable} from "@angular/core";
import {MagicienResult} from "./magicienresult";
import {environment} from "../../../environments/environment.development";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {log} from "node:util";
import {response} from "express";

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

