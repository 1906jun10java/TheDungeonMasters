import {Condition} from './Condition';

export class Entity {
  id: number;
  name: string;
  entityType: string;
  maxHp: number;
  currentHp: number;
  armorClass: number;
  conditions: Condition[];
  initiativeMod: number;
  initiativeTotal: number;
}
