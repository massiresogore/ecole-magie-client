import {AdminResult} from "./admin.result";
import {environment} from "../../../environments/environment.development";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})

export class AdminService {
  constructor() {}

  getAdminData():Promise<AdminResult>{
    return new Promise<AdminResult>((resolve, reject) => {
      fetch(environment.apiUrl+"/users")
      .then(res => res.json())
      .then(result => resolve(result))
      .catch((error) => reject(error));
    })
  }
}

