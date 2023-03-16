import { StarShip } from "./starship.model";
export interface HttpResponse {
  count: number;
  next: string;
  previous: string;
  results: StarShip[];
}
