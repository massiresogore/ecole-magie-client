import {Pouvoir} from "./pouvoir.interface";
import {EcoleResult} from "../../services/ecoleResult";

export type PouvoirResult = EcoleResult &{
  data: Array<Pouvoir>
}
