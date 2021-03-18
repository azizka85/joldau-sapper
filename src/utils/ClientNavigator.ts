import type { INavigator } from "./INavigator";
import type { Router, RouteResult } from "./Router";

export class ClientNavigator implements INavigator {
  public constructor(
    private router: Router
  ) { }

  navigateTo(path: string) {
    history.pushState(null, null, path);  
    this.handlePath(path);
  }

  match(path: string): RouteResult {
    return this.router?.check(path);
  }

  handlePath(path: string) {
    const res = this.match(path);
    console.log(res);
  }  
}
