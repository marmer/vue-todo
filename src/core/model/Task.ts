import { v4 as uuid } from "uuid";

export default class Task {
  readonly done: boolean;
  readonly id: string;
  readonly description: string;

  constructor(description: string, id: string = uuid(), done = false) {
    this.description = description;
    this.id = id;
    this.done = done;
  }
}
