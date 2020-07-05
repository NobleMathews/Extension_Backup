"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandler = void 0;
const request = require("request");
const JDOODLE_ENDPOINT = 'https://api.jdoodle.com/execute';
class RequestHandler {
    /**
     * @description
     *  send a 'run' post request, listind to 'data' event, on it parseing the data (buffer)
     *  to an object, by cases emiting jdoodle-error or jdoodle-success events.
     *
     * @event jdoodle-error - emited from 'data' event, if recived an error as response data.
     * @event jdoodle-success - emited from 'data' event, if recived a successed response data.
     *
     * @param lang language id.
     * @param index language version index.
     * @param program code to run.
     */
    static postRunRequest(lang, index, program) {
        const runRequestBody = {
            script: program,
            language: lang,
            versionIndex: index,
            clientId: process.env.JDOODLE_CLIENT_ID,
            clientSecret: process.env.JDOODLE_CLIENT_SECRET
        };
        return request.post({
            url: JDOODLE_ENDPOINT,
            json: runRequestBody
        })
            .on('data', function (data) {
            const parsedData = JSON.parse(data.toString());
            parsedData.error ?
                this.emit('jdoodle-error', parsedData) :
                this.emit('jdoodle-success', parsedData);
        });
    }
}
exports.RequestHandler = RequestHandler;
//# sourceMappingURL=request-handler.js.map