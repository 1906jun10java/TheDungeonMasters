import { Entity } from './Entity';

export class Campaign {
  id: number;
  name: string;
  entities: Entity[];
  currentRound: number;
  currentTurn: number;
  status: string;
}
