import { Router } from 'express';

class ItemsRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.get('/', (req, res) => { });
  }
}

const itemsRoutes = new ItemsRoutes().routes;
export { itemsRoutes }