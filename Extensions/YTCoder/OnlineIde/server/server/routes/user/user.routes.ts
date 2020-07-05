import { Router } from 'express';

class UserRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.get('/', (req, res) => {  });
    this.routes.post('/', (req, res) => {  });
    this.routes.get('/data', (req, res) => {  });
  }
}

const userRoutes = new UserRoutes().routes;
export { userRoutes }