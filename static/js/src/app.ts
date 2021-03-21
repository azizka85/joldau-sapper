import { Controller } from "./controller";

export class App {
  private controllers = new Map<string, Controller>();

  constructor(private container: HTMLElement) { }
}
