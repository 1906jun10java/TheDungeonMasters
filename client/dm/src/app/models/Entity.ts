import { Condition } from './Condition';

export class Entity {
  id: number;
  name: string;
  type: string;
  maxHp: number;
  currentHp: number;
  armorClass: number;
  conditions: Condition[];
  initiativeModifier: number;
  initiativeTotal: number;
}
