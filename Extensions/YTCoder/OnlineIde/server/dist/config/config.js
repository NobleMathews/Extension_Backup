"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
class EnvConfig {
    constructor() {
        this.env = process.env.NODE_ENV || 'dev';
        this.assignConfig();
    }
    assignConfig() {
        if (this.env === 'dev' || this.env === 'test') {
            const config = require('./config.json');
            const envConfig = config[this.env];
            Object.keys(envConfig).forEach((key) => {
                process.env[key] = envConfig[key];
            });
        }
    }
}
exports.setup = new EnvConfig();
//# sourceMappingURL=config.js.map