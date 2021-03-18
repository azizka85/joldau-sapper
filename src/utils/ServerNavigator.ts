import type { ServerResponse } from 'http';
import type { INavigator } from "./INavigator";
import type { Router, RouteResult } from "./Router";

export class ServerNavigator implements INavigator {
  public constructor(
    private router: Router,
    private response: ServerResponse
  ) { }

  navigateTo(path: string) {
    this.response?.writeHead(302, {
      'Location': path
    });
    // this.response?.end();
  }

  match(path: string): RouteResult {
    return this.router?.check(path);
  }

  handlePath(path: string) {
    const res = this.match(path);
    console.log(res);
  }  
}
