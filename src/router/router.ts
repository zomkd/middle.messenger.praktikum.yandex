import { Route } from './route';
import { Block } from 'src/utils/block/block';
import { Page404 } from '../views/404/404';

class Router {
  private static __instance: Router;
  private _routes: Route[] = [];
  private _currentRoute: Route | null = null;
  private _history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._routes = [];

    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this.rootQuery);
    this._routes.push(route);

    return this;
  }
  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }
  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      const errorPage = new Route("/error-404", Page404, this.rootQuery);
      console.log(errorPage);
      errorPage.render();
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  public go(pathname: string) {
    this._history.pushState({}, '', pathname);

    this._onRoute(pathname);
  }

  public back() {
    this._history.back();
  }

  public forward() {
    this._history.forward();
  }

  private getRoute(pathname: string) {
    return this._routes.find((route) => route.match(pathname));
  }
}

export default new Router('#app');
