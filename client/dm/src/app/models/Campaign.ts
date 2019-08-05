import {Entity} from './Entity';

export class Campaign {
  campaignId: number;
  campaignName: string;
  activeEntities: Entity[];
  currentRound: number;
  currentTurn: number;
  status: string;
}
