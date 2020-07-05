"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
class UserRoutes {
    constructor() {
        this.routes = express_1.Router();
        this._init();
    }
    _init() {
        this.routes.get('/', (req, res) => { });
        this.routes.post('/', (req, res) => { });
        this.routes.get('/data', (req, res) => { });
    }
}
const userRoutes = new UserRoutes().routes;
exports.userRoutes = userRoutes;
//# sourceMappingURL=user.routes.js.map