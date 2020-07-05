"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRoutes = void 0;
const express_1 = require("express");
class ItemsRoutes {
    constructor() {
        this.routes = express_1.Router();
        this._init();
    }
    _init() {
        this.routes.get('/', (req, res) => { });
    }
}
const itemsRoutes = new ItemsRoutes().routes;
exports.itemsRoutes = itemsRoutes;
//# sourceMappingURL=items.routes.js.map