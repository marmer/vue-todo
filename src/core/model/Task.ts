import { v4 as uuid } from "uuid";

export default class Task {
  readonly id: string;
  readonly description: string;

  constructor(description: string, id: string = uuid()) {
    this.description = description;
    this.id = id;
  }
}
