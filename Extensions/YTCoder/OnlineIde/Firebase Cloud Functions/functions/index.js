"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require('firebase-functions');
const express = require("express");
const bodyParser = require("body-parser");
require("./config/config.js");
const app_routes_1 = require("./routes/app.routes");
const PORT = 3000;
class ExpressApp {
    constructor() {
        this.app = express();
        this._init();
    }
    _init() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        if (process.env.NODE_ENV !== 'test') {
            this.enableCrossOrigin();
        }
    }
    enableCrossOrigin() {
        this.app.use((req, res, next) => {
            const origin = req.headers.origin;
            //&& ~whiteOrigins.indexOf(origin.trim())
            if (origin && typeof origin === 'string') {
                res.setHeader('Access-Control-Allow-Origin', origin);
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.setHeader('Access-Control-Allow-Credentials', 'true');
            }
            next();
        });
    }
}
const app = new ExpressApp().app;
app.use(app_routes_1.appRoutes); // connecting routes
app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map
exports.app = functions.https.onRequest(app);
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
