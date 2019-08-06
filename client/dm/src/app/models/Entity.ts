import {Condition} from './Condition';

export class Entity {
  id: number;
  campaginId: number;
  name: string;
  entityType: string;
  hp: number;
  currentHp: number;
  armorClass: number;
  conditions: Condition[];
  initiativeMod: number;
  initiativeTotal: number;
}
