import * as request from 'request';

const JDOODLE_ENDPOINT = 'https://api.jdoodle.com/execute';

export class RequestHandler {

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
    public static postRunRequest(lang: string , index: string , program: string): request.Request {
        const runRequestBody = {
            script : program,
            language: lang,
            versionIndex: index,
            clientId: process.env.JDOODLE_CLIENT_ID,
            clientSecret: process.env.JDOODLE_CLIENT_SECRET
        };
        
        return request.post({
            url: JDOODLE_ENDPOINT,
            json: runRequestBody
        })
        .on('data', function (data: Buffer) {
            const parsedData = JSON.parse(data.toString());
            parsedData.error ? 
                this.emit('jdoodle-error', parsedData): 
                this.emit('jdoodle-success', parsedData); 
        })
    }
}