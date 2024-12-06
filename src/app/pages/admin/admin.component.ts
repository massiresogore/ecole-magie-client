import {Component, inject,Injectable} from '@angular/core';
import {AdminService} from "./admin.service";
import {Admin} from "./admin.interface";
import {AdminResult} from "./admin.result";
import {UibuttonblockComponent} from "../ui/uibuttonblock/uibuttonblock.component";
import {AdminlistComponentComponent} from "./adminlist/adminlist.component";
import {PouvoirslistComponent} from "../pouvoirs/pouvoirslist/pouvoirslist.component";


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    UibuttonblockComponent,
    AdminlistComponentComponent,
    PouvoirslistComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  adminService = inject(AdminService);
  adminResult: AdminResult | null = null;
  adminData: Admin[] = [];
  statusCode: number | null = null;
  message: string | null = null;

   constructor() {
     this.adminService.getAdminData()
       .then((admin: AdminResult) => {
         this.adminResult = admin;
         this.adminData = admin.data;
         this.statusCode = admin.code;
         this.message = admin.message;
         // console.log(this.adminData);
       })
       .then(error => {
         console.log(error);});
   }



}
