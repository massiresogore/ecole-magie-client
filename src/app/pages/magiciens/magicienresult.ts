import {EcoleResult} from "../../services/ecoleResult";
import {Magicien} from "./magicien.interface";

export type MagicienResult = EcoleResult & {
  data:Array<Magicien>;
}
