export enum CategoryType {
  general = 'general',
  client = 'client',
  server = 'server'
};

export interface Route {
  pattern: RegExp | string;  
};

export interface RouteResult {
  route?: Route,
  params: string[]
};

export interface ConstructorParameter {
  categories?: Map<CategoryType, Route[]>;
};

export class Router {
  protected categories: Map<CategoryType, Route[]>;
  
  public constructor({ categories }: ConstructorParameter) { 
    this.categories = categories || new Map();
  }

  protected createCategoryIfNotExist(categoryType: CategoryType) {
    if(!this.categories.has(categoryType)) {
      this.categories.set(categoryType, []);
    }
  }

  public addRoute(route: Route, categoryType: CategoryType) {
    this.createCategoryIfNotExist(categoryType);
    
    this.categories.get(categoryType).push(route);    
  }

  public removeRoute(param: RegExp | string, categoryType: CategoryType) {
    if(this.categories.has(categoryType)) {
      let routes = this.categories.get(categoryType);

      for(let i = 0; i < routes.length; i++) {
        let route = routes[i];
  
        if(param.toString() == route.pattern.toString()) {
          routes.splice(i, 1);
        }
      }      
    }
  }

  public flush() {
    this.categories = new Map();
  }

  public check(input: string, categoryType: CategoryType): RouteResult {
    let route: Route = null;
    let params: string[] = [];

    if(this.categories.has(categoryType)) {
      let routes = this.categories.get(categoryType);

      for(let item of routes) {
        let match = input.match(item.pattern);
  
        if(match) {
          params = match;
          route = item;
  
          break;
        }
      }
    }

    return { route, params };
  }
};
