import {Component, Input} from "@angular/core";
import {Admin} from "../admin.interface";
import {UibuttonblockComponent} from "../../ui/uibuttonblock/uibuttonblock.component";

@Component({
  standalone: true,
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  imports: [
    UibuttonblockComponent
  ],
  styleUrls: ['./adminlist.component.css']
})

export class AdminlistComponentComponent {

  @Input() adminData: Admin[] = [];


  createAdmin(admin: Admin) {
    alert("Create new admin"+ admin.id);
  }

  readAdmin(admin: Admin) {
    alert("Read admin id: " + admin.id)
  }

  updateAdmin(admin: Admin) {
    alert("Update admin id: " + admin.id)
  }

  deleteAdmin(admin: Admin) {
    alert("Delete admin id: " + admin.id)
  }



}
