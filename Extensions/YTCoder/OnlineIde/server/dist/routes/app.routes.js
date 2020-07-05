"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const express_1 = require("express");
const _ = require("lodash");
const language_manager_1 = require("../utils/language-manager");
const request_handler_1 = require("../utils/jdoodle-request-handler/request-handler");
class AppRoutes {
    constructor() {
        this.routes = express_1.Router();
        this.initRoutes();
    }
    initRoutes() {
        this.routes
            .get('/langs', (req, res) => {
            console.log({ msg: 'GET: \'/langs\'' });
            const langs = Array.from(language_manager_1.LanguagesManager.getLanguagesMap());
            console.log(langs);
            return res.status(200).send({ langs });
        })
            .post('/run', (req, res) => {
            console.log({ msg: 'POST: \'/run\'' });
            const body = _.pick(req.body, ['lang', 'version', 'program']);
            if (!this.validatePostRun(body)) {
                console.log('invalid body parameters');
                return res.status(400).send('invalid body parameters');
            }
            try {
                const index = language_manager_1.LanguagesManager.getLanguageVersionIndex(body.lang, body.version);
                request_handler_1.RequestHandler.postRunRequest(body.lang, index, body.program)
                    // request error
                    .on('error', (error) => {
                    console.log({ msg: 'postRunRequest on error', params: error });
                    return res.status(400).send(error);
                })
                    .on('jdoodle-error', (error) => {
                    console.log({ msg: 'postRunRequest on jdoodle-error', params: error });
                    return res.status(400).send(error);
                })
                    .on('jdoodle-success', (result) => {
                    console.log({ msg: 'postRunRequest on jdoodle-success', params: result });
                    return res.status(200).send({ runResult: result });
                });
            }
            catch (error) {
                console.log('request fail');
                return res.status(400).send('request fail');
            }
        });
    }
    validatePostRun(reqBody) {
        return !_.some(reqBody, (value) => _.isNil(value)) // all reqBody properties != undifined & null 
            && _.isString(reqBody.lang)
            && _.isString(reqBody.version)
            && _.isString(reqBody.program)
            && !_.isEqual(reqBody.program, '') // is program not empty string
            && language_manager_1.LanguagesManager.isLangSupported(reqBody.lang, reqBody.version); // are lang & version supported            
    }
}
const appRoutes = new AppRoutes().routes;
exports.appRoutes = appRoutes;
//# sourceMappingURL=app.routes.js.map