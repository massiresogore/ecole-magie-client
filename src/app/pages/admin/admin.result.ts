import {Admin} from "./admin.interface";
import {EcoleResult} from "../../services/ecoleResult";


export type  AdminResult = EcoleResult & {
  data: Array<Admin>
}
