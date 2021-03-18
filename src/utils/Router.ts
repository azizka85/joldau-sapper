export interface Route {
  pattern: RegExp | string;  
};

export interface RouteResult {
  route?: Route,
  params: string[]
};

export interface ConstructorParameter {
  routes?: Route[];
};

export class Router {
  protected routes: Route[];
  
  public constructor({ routes }: ConstructorParameter) { 
    this.routes = routes || [];
  }

  public addRoute(route: Route) {   
    this.routes.push(route);    
  }

  public removeRoute(param: RegExp | string) {
    for(let i = 0; i < this.routes.length; i++) {
      const route = this.routes[i];

      if(param.toString() == route.pattern.toString()) {
        this.routes.splice(i, 1);
      }
    }      
  }

  public flush() {
    this.routes = [];
  }

  public check(input: string): RouteResult {
    let route: Route = null;
    let params: string[] = [];

    for(let item of this.routes) {
      const match = input.match(item.pattern);

      if(match) {
        params = match;
        route = item;

        break;
      }
    }    

    return { route, params };
  }
};
